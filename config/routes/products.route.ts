import { Express, Request, Response } from "express";

import Products from "../../data/products.json";

export const register = (app: Express) => {
  app.get("/api/products", (req: Request, res: Response) => {
    return res.status(200).send(Products);
  });
};
