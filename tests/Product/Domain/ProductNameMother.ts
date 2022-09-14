import { ProductName } from '../../../src/Product/Domain/ValueObject/ProductName';
import { WordMother } from '../../Shared/Domain/WordMother';

export class ProductNameMother {
  static create(value: string): ProductName {
    return new ProductName(value);
  }

  static random(): ProductName {
    return this.create(WordMother.random());
  }
}
