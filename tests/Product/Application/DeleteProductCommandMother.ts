import { DeleteProductCommand } from '../../../src/Product/Application/Command/DeleteProductCommand';
import { ProductIdMother } from '../Domain/ProductIdMother';

export class DeleteProductCommandMother {
  static create(id: string): DeleteProductCommand {
    return new DeleteProductCommand(id);
  }

  static random(): DeleteProductCommand {
    return this.create(
      ProductIdMother.random().value,
    );
  }
}
