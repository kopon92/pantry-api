import { CreateProductCommand } from '../../../src/Product/Application/Command/CreateProductCommand';
import { ProductIdMother } from '../Domain/ProductIdMother';
import { ProductImageMother } from '../Domain/ProductImageMother';
import { ProductNameMother } from '../Domain/ProductNameMother';
import { ProductPriceMother } from '../Domain/ProductPriceMother';

export class CreateProductCommandMother {
  static create(id: string, name: string, image: string, currentPrice: number, lastShoppingPrice: number): CreateProductCommand {
    return new CreateProductCommand({ id, name, image, currentPrice, lastShoppingPrice });
  }

  static random(): CreateProductCommand {
    return this.create(
      ProductIdMother.random().value,
      ProductNameMother.random().value,
      ProductImageMother.random().value,
      ProductPriceMother.random().value,
      ProductPriceMother.random().value,
    );
  }
}
