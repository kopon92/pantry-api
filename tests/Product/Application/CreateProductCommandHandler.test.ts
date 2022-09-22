import { ProductMother } from '../Domain/ProductMother';
import { CreateProductCommandHandler } from '../../../src/Product/Application/CreateProductCommandHandler';
import { ProductRepositoryMock } from '../__mocks__/ProductRepositoryMock';
import { CreateProductCommandMother } from './CreateProductCommandMother';

describe('CreateProduct CommandHandler', () => {
  let repository: ProductRepositoryMock;
  let handler: CreateProductCommandHandler;

  beforeEach(() => {
    repository = new ProductRepositoryMock();
    handler = new CreateProductCommandHandler(repository);
  });

  it('should create product', async () => {
    const command = CreateProductCommandMother.random();
    await handler.handle(command);

    const product = ProductMother.fromCommand(command);
    repository.assertLastSavedProductIs(product);
  });
});
