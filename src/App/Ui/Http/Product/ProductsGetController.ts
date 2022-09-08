import { Request, Response } from "express";
import httpStatus from "http-status";

import { ProductsResponse } from "../../../../Product/Application/ProductsResponse";
import { FindAllProductsQuery } from "../../../../Product/Application/Query/FindAllProductsQuery";
import { QueryBus } from "../../../../Shared/Domain/QueryBus";
import { Controller } from "../Controller";

export default class ProductsGetController implements Controller {
  constructor(private queryBus: QueryBus) {}

  async run(_req: Request, res: Response) {

    const query = new FindAllProductsQuery();
    const queryResponse: ProductsResponse = await this.queryBus.ask(query);

    res.header("Access-Control-Allow-Origin", "*");

    res.status(httpStatus.OK).send({id: queryResponse.idProduct});
  }
}
