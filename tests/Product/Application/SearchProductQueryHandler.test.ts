import { ProductMother } from '../Domain/ProductMother';
import { SearchProductQueryHandler } from '../../../src/Product/Application/SearchProductQueryHandler';
import { SearchProductQuery } from '../../../src/Product/Application/Query/SearchProductQuery';
import { ProductRepositoryMock } from '../__mocks__/ProductRepositoryMock';
import { ProductsResponseMother } from '../Domain/ProductsResponseMother';
import { SearchProductQueryMother } from './SearchProductQueryMother';
import { ProductNotExist } from '../../../src/Product/Domain/Exceptions/ProductNotExist';
import { ProductResponseMother } from '../Domain/ProductResponseMother';

describe('SearchProduct QueryHandler', () => {
  let repository: ProductRepositoryMock;

  beforeEach(() => {
    repository = new ProductRepositoryMock();
  });

  it('should find an existing product', async () => {
    const product = ProductMother.random();
    repository.returnOnSearch(product);

    const handler = new SearchProductQueryHandler(repository);

    const query = SearchProductQueryMother.random();
    const response = await handler.handle(query);

    repository.assertSearch();

    const expected = ProductResponseMother.create(product);
    expect(expected).toEqual(response);
  });

  it('should throw an exception when product not exists', async () => {
    const handler = new SearchProductQueryHandler(repository);

    const query = SearchProductQueryMother.random();

    await expect(handler.handle(query)).rejects.toBeInstanceOf(ProductNotExist);
  });
});
