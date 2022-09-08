import { Query } from "../../Shared/Domain/Query";
import { QueryHandler } from "../../Shared/Domain/QueryHandler";
import { FindAllProductsQuery } from "./Query/FindAllProductsQuery";
import Products from "../../../data/products.json";
import { ProductsResponse } from "./ProductsResponse";
import { ProductNotExist } from "../Domain/ProductNotExist";
import { ProductRepository } from "../Domain/ProductRepository";

export class FindAllProductsQueryHandler implements QueryHandler<FindAllProductsQuery, ProductsResponse> {
    constructor(private repository: ProductRepository) {}

  subscribedTo(): Query {
    return FindAllProductsQuery;
  }

  async handle(_query: FindAllProductsQuery): Promise<ProductsResponse> {
    const products = await this.repository.search();

    if (!products) {
      throw new ProductNotExist();
    }

    return new ProductsResponse(products.id.value);
  }
}
