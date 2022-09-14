import { ProductPrice } from '../../../src/Product/Domain/ValueObject/ProductPrice';
import { IntegerMother } from '../../Shared/Domain/IntegerMother';

export class ProductPriceMother {
  static create(value: number): ProductPrice {
    return new ProductPrice(value);
  }

  static random(): ProductPrice {
    return this.create(IntegerMother.random());
  }
}
