import { ProductImage } from '../../../src/Product/Domain/ValueObject/ProductImage';
import { SlugMother } from '../../Shared/Domain/SlugMother';

export class ProductImageMother {
  static create(value: string): ProductImage {
    return new ProductImage(value);
  }

  static random(): ProductImage {
    return this.create(SlugMother.random());
  }
}
