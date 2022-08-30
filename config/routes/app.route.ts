import { Express } from "express";

import HealthCheckController from "../../src/App/Ui/Http/HealthCheckController";
import container from "../services";

export const register = (app: Express) => {
  const healthCheckController: HealthCheckController = container.get(
    "App.Ui.Http.HealthCheckController"
  );
  app.get(
    "/health-check",
    healthCheckController.run.bind(HealthCheckController)
  );
};
