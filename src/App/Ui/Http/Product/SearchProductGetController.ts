import { Request, Response } from "express";
import { body, ValidationChain, validationResult } from "express-validator";
import httpStatus from "http-status";
import { ProductResponse } from "../../../../Product/Application/ProductResponse";

import { SearchProductQuery } from "../../../../Product/Application/Query/SearchProductQuery";
import { QueryBus } from "../../../../Shared/Domain/QueryBus";
import { Controller } from "../Controller";

export default class SearchProductGetController implements Controller {
  constructor(private queryBus: QueryBus) { }

  static validator(): ValidationChain[] {
    return [
      body('id').isUUID().withMessage('Invalid id'),
    ];
  }

  async run(_req: Request, res: Response) {
    const errors = validationResult(_req);

    if (!errors.isEmpty()) {
      res.status(httpStatus.BAD_REQUEST).json({ errors: errors.array() });
    }

    const id: string = _req.body.id;

    const query = new SearchProductQuery(id);
    const queryResponse: ProductResponse = await this.queryBus.ask(query);

    res.header("Access-Control-Allow-Origin", "*");


    res.status(httpStatus.OK).send(
      queryResponse
        ? this.toResponse(queryResponse)
        : null
    );
  }

  private toResponse(productResponse: ProductResponse) {

    let formatProduct = {
      id: productResponse.product.id.value,
      name: productResponse.product.name.value,
      image: productResponse.product.image.value,
      currentPrice: productResponse.product.currentPrice.value,
      lastShoppingPrice: productResponse.product.lastShoppingPrice.value,
    };
    return { 'product': formatProduct };
  };
}
