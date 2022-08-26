import cors from "cors";
import { Application, Request, Response } from "express";

import Products from "../../data/products.json";

export const loadApiEndpoints = (app: Application): void => {
  app.use(cors());
  app.get("/api/products", (req: Request, res: Response) => {
    return res.status(200).send(Products);
  });
};
