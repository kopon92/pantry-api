import { Request, Response } from "express";
import httpStatus from "http-status";

import Products from "../../../../../data/products.json";
import { Controller } from "../Controller";

export default class ProductsGetController implements Controller {
  async run(_req: Request, res: Response) {
    res.header("Access-Control-Allow-Origin", "*");

    res.status(httpStatus.OK).send(JSON.stringify(Products));
  }
}
