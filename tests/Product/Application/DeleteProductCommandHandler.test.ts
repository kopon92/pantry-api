import { ProductMother } from '../Domain/ProductMother';
import { DeleteProductCommandHandler } from '../../../src/Product/Application/DeleteProductCommandHandler';
import { ProductRepositoryMock } from '../__mocks__/ProductRepositoryMock';
import { DeleteProductCommandMother } from './DeleteProductCommandMother';

describe('DeleteProduct CommandHandler', () => {
  let repository: ProductRepositoryMock;
  let handler: DeleteProductCommandHandler;

  beforeEach(() => {
    repository = new ProductRepositoryMock();
    handler = new DeleteProductCommandHandler(repository);
  });

  it('should delete product', async () => {
    const product = ProductMother.random();
    const command = DeleteProductCommandMother.create(product.id.value);
    await handler.handle(command);
  });
});
