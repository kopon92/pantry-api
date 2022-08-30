import cors from "cors";
import { Express, Request, Response } from "express";

import Products from "../../data/products.json";
import HealthCheckController from "../../src/App/Ui/Http/HealthCheckController";
import container from "../services";

export const register = (app: Express) => {
  app.use(cors());
  const controller: HealthCheckController = container.get(
    "App.Ui.Http.HealthCheckController"
  );
  app.get("/health-check", controller.run.bind(HealthCheckController));
  app.get("/api/products", (req: Request, res: Response) => {
    return res.status(200).send(Products);
  });
};
