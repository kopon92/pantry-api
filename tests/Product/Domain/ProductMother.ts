import { Product } from '../../../src/Product/Domain/Product';
import { ProductId } from '../../../src/Product/Domain/ValueObject/ProductId';
import { ProductImage } from '../../../src/Product/Domain/ValueObject/ProductImage';
import { ProductName } from '../../../src/Product/Domain/ValueObject/ProductName';
import { ProductPrice } from '../../../src/Product/Domain/ValueObject/ProductPrice';
import { ProductIdMother } from './ProductIdMother';
import { ProductImageMother } from './ProductImageMother';
import { ProductNameMother } from './ProductNameMother';
import { ProductPriceMother } from './ProductPriceMother';

export class ProductMother {
  static create(
    id: ProductId,
    name: ProductName,
    image: ProductImage,
    currentPrice: ProductPrice,
    lastShoppingPrice: ProductPrice
  ): Product {
    return new Product(id, name, image, currentPrice, lastShoppingPrice);
  }

  static random(): Product {
    return this.create(
      ProductIdMother.random(),
      ProductNameMother.random(),
      ProductImageMother.random(),
      ProductPriceMother.random(),
      ProductPriceMother.random()
    );
  }
}
