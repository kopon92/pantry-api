import { ProductResponse } from '../../../src/Product/Application/ProductResponse';
import { Product } from '../../../src/Product/Domain/Product';

export class ProductResponseMother {
  static create(product: Product) {
    return new ProductResponse(product);
  }
}
