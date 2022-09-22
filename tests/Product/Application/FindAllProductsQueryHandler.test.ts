import { ProductMother } from '../Domain/ProductMother';
import { FindAllProductsQueryHandler } from '../../../src/Product/Application/FindAllProductsQueryHandler';
import { FindAllProductsQuery } from '../../../src/Product/Application/Query/FindAllProductsQuery';
import { ProductRepositoryMock } from '../__mocks__/ProductRepositoryMock';
import { ProductsResponseMother } from '../Domain/ProductsResponseMother';

describe('SearchAllProducts QueryHandler', () => {
  let repository: ProductRepositoryMock;

  beforeEach(() => {
    repository = new ProductRepositoryMock();
  });

  it('should find all products', async () => {
    const products = [ProductMother.random(), ProductMother.random(), ProductMother.random()];

    repository.returnOnSearchAll(products);

    const handler = new FindAllProductsQueryHandler(repository);

    const query = new FindAllProductsQuery();
    const response = await handler.handle(query);

    repository.assertSearchAll();

    const expected = ProductsResponseMother.create(products);
    expect(expected).toEqual(response);
  });
});
