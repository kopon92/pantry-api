
import { ProductId } from '../../../src/Product/Domain/ValueObject/ProductId';
import { UuidMother } from '../../Shared/Domain/UuidMother';

export class ProductIdMother {
  static create(value: string): ProductId {
    return new ProductId(value);
  }

  static creator() {
    return () => ProductId.random();
  }

  static random(): ProductId {
    return this.create(UuidMother.random());
  }
}
