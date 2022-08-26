import { AggregateRoot } from "../../Shared/Domain/AggregateRoot";
import { ProductId } from "./ValueObject/ProductId";

export class Product extends AggregateRoot {
  readonly id: ProductId;

  constructor(id: ProductId) {
    super();
    this.id = id;
  }

  static create(id: ProductId): Product {
    const course = new Product(id);

    return course;
  }

  static fromPrimitives(plainData: { id: string }): Product {
    return new Product(new ProductId(plainData.id));
  }

  toPrimitives(): { id: any } {
    return {
      id: this.id.value,
    };
  }
}
