import { ProductsResponse } from '../../../src/Product/Application/ProductsResponse';
import { Product } from '../../../src/Product/Domain/Product';

export class ProductsResponseMother {
  static create(products: Array<Product>) {
    return new ProductsResponse(products);
  }
}
