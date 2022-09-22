import { ProductMother } from '../Domain/ProductMother';
import { SearchAllProductsQueryHandler } from '../../../src/Product/Application/SearchAllProductsQueryHandler';
import { SearchAllProductsQuery } from '../../../src/Product/Application/Query/SearchAllProductsQuery';
import { ProductRepositoryMock } from '../__mocks__/ProductRepositoryMock';
import { ProductsResponseMother } from '../Domain/ProductsResponseMother';

describe('SearchAllProducts QueryHandler', () => {
  let repository: ProductRepositoryMock;

  beforeEach(() => {
    repository = new ProductRepositoryMock();
  });

  it('should search all products', async () => {
    const products = [ProductMother.random(), ProductMother.random(), ProductMother.random()];

    repository.returnOnSearchAll(products);

    const handler = new SearchAllProductsQueryHandler(repository);

    const query = new SearchAllProductsQuery();
    const response = await handler.handle(query);

    repository.assertSearchAll();

    const expected = ProductsResponseMother.create(products);
    expect(expected).toEqual(response);
  });
});
