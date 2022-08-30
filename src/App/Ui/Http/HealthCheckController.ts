import { Request, Response } from "express";
import httpStatus from "http-status";

import { Controller } from "./Controller";

export default class HealthCheckController implements Controller {
  async run(_req: Request, res: Response) {
    res.status(httpStatus.OK).json();
  }
}
