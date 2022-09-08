import { Response } from "../../Shared/Domain/Response";
import { Product } from "../Domain/Product";

export class ProductsResponse implements Response {
  readonly products: Array<Product>;

  constructor(products: Array<Product>) {
    this.products = products;
  }
}
