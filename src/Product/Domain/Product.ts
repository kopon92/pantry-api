import { AggregateRoot } from "../../Shared/Domain/AggregateRoot";
import { ProductId } from "./ValueObject/ProductId";
import { ProductImage } from "./ValueObject/ProductImage";
import { ProductName } from "./ValueObject/ProductName";
import { ProductPrice } from "./ValueObject/ProductPrice";

export class Product extends AggregateRoot {
  readonly id: ProductId;
  readonly name: ProductName;
  readonly image: ProductImage;
  readonly currentPrice: ProductPrice;
  readonly lastShoppingPrice: ProductPrice;

  constructor(id: ProductId, name: ProductName, image: ProductImage, currentPrice: ProductPrice, lastShoppingPrice: ProductPrice) {
    super();
    this.id = id;
    this.name = name;
    this.image = image;
    this.currentPrice = currentPrice;
    this.lastShoppingPrice = lastShoppingPrice;
  }

  static create(id: ProductId, name: ProductName, image: ProductImage, currentPrice: ProductPrice, lastShoppingPrice: ProductPrice): Product {
    const course = new Product(id, name, image, currentPrice, lastShoppingPrice);

    return course;
  }

  static fromPrimitives(plainData: { id: string, name: string, image: string, currentPrice: number, lastShoppingPrice: number }): Product {
    return new Product(
      new ProductId(plainData.id),
      new ProductName(plainData.name),
      new ProductImage(plainData.image),
      new ProductPrice(plainData.currentPrice),
      new ProductPrice(plainData.lastShoppingPrice),
      );
  }

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      image: this.image.value,
      currentPrice: this.currentPrice.value,
      lastShoppingPrice: this.lastShoppingPrice.value,
    };
  }
}