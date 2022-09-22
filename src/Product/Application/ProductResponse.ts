import { Response } from "../../Shared/Domain/Response";
import { Product } from "../Domain/Product";

export class ProductResponse implements Response {
  readonly product: Product;

  constructor(product: Product) {
    this.product = product;
  }
}
