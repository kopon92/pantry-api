import { Request, Response } from "express";
import httpStatus from "http-status";

import { ProductsResponse } from "../../../../Product/Application/ProductsResponse";
import { SearchAllProductsQuery } from "../../../../Product/Application/Query/SearchAllProductsQuery";
import { Product } from "../../../../Product/Domain/Product";
import { QueryBus } from "../../../../Shared/Domain/QueryBus";
import { Controller } from "../Controller";

export default class SearchAllProductsGetController implements Controller {
  constructor(private queryBus: QueryBus) { }

  async run(_req: Request, res: Response) {

    const query = new SearchAllProductsQuery();
    const queryResponse: ProductsResponse = await this.queryBus.ask(query);

    res.header("Access-Control-Allow-Origin", "*");

    res.status(httpStatus.OK).send(
      queryResponse
        ? this.toResponse(queryResponse.products)
        : null
    );
  }

  private toResponse(products: Array<Product>) {

    let formatProducts = products.map(product => ({
      id: product.id.value,
      name: product.name.value,
      image: product.image.value,
      currentPrice: product.currentPrice.value,
      lastShoppingPrice: product.lastShoppingPrice.value,
    }));
    return { 'products': formatProducts };
  };
}
