import { Query } from "../../Shared/Domain/Query";
import { QueryHandler } from "../../Shared/Domain/QueryHandler";
import { SearchAllProductsQuery } from "./Query/SearchAllProductsQuery";
import { ProductsResponse } from "./ProductsResponse";
import { ProductRepository } from "../Domain/ProductRepository";
import { SearchProductQuery } from "./Query/SearchProductQuery";
import { ProductId } from "../Domain/ValueObject/ProductId";
import { ProductResponse } from "./ProductResponse";
import { Nullable } from "../../Shared/Domain/Nullable";
import { ProductNotExist } from "../Domain/Exceptions/ProductNotExist";

export class SearchProductQueryHandler implements QueryHandler<SearchProductQuery, ProductResponse> {
    constructor(private repository: ProductRepository) {}

  subscribedTo(): Query {
    return SearchProductQuery;
  }

  async handle(_query: SearchProductQuery): Promise<ProductResponse> {
    const id = new ProductId(_query.id);

    const product = await this.repository.search(id);

    if (!product) {
      throw new ProductNotExist();
    }

    return new ProductResponse(product);
  }
}
