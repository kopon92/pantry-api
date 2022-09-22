import compression from "compression";
import errorHandler from "errorhandler";
import express, { Request, Response } from "express";
import Router from "express-promise-router";
import { frameguard, hidePoweredBy, noSniff, xssFilter } from "helmet";
import http from "http";
import httpStatus from "http-status";
import cors from "cors";

import { registerRoutes } from "../../../../config/routes";
import container from "../../../../config/services";
import Logger from "../../Domain/Logger/Logger";

export class Server {
  private readonly express: express.Express;
  private readonly logger: Logger;
  public readonly port: string;
  public httpServer?: http.Server;

  constructor(port: string) {
    const router = Router();
    router.use(errorHandler());

    this.port = port;

    this.express = express();
    this.express.use(xssFilter());
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(noSniff());
    this.express.use(hidePoweredBy());
    this.express.use(frameguard({ action: "deny" }));
    this.express.use(compression());
    this.express.use(cors({origin: '*'}));
    this.express.use(router);

    this.logger = container.get("Shared.Infrastructure.Logger.WinstonLogger");

    registerRoutes(router);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/ban-types
    router.use((err: Error, req: Request, res: Response, next: Function) => {
      this.logger.error(err);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    });
  }

  public async listen(): Promise<void> {
    return new Promise((resolve) => {
      this.httpServer = this.express.listen(this.port, () => {
        this.logger.info(
          `Application running at http://localhost:${this.port} `
        );
        this.logger.info("Press CTRL + C to stop the application");
        resolve();
      });
    });
  }

  public async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close((error) => {
          if (error) {
            return reject(error);
          }

          return resolve();
        });
      }

      return resolve();
    });
  }
}
