import { Response } from "../../Shared/Domain/Response";

export class ProductsResponse implements Response {
  readonly idProduct: string;

  constructor(idProduct: string) {
    this.idProduct = idProduct;
  }
}
