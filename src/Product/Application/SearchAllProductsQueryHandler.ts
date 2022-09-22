import { Query } from "../../Shared/Domain/Query";
import { QueryHandler } from "../../Shared/Domain/QueryHandler";
import { SearchAllProductsQuery } from "./Query/SearchAllProductsQuery";
import { ProductsResponse } from "./ProductsResponse";
import { ProductRepository } from "../Domain/ProductRepository";

export class SearchAllProductsQueryHandler implements QueryHandler<SearchAllProductsQuery, ProductsResponse> {
    constructor(private repository: ProductRepository) {}

  subscribedTo(): Query {
    return SearchAllProductsQuery;
  }

  async handle(_query: SearchAllProductsQuery): Promise<ProductsResponse> {
    const products = await this.repository.searchAll();

    return new ProductsResponse(products);
  }
}
