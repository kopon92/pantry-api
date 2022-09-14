import { ProductRepository } from '../../../src/Product/Domain/ProductRepository';
import { Product } from '../../../src/Product/Domain/Product';
import { Nullable } from '../../../src/Shared/Domain/Nullable';
import { ProductMother } from '../Domain/ProductMother';

export class ProductRepositoryMock implements ProductRepository {
  private mockSearch = jest.fn();
  products: Product[] = [];

  returnOnSearch(products: Product[]) {
    this.products = products;
  }

  async search(): Promise<Nullable<Product[]>> {
    return this.mockSearch();
  }

  assertSearch() {
    expect(this.mockSearch).toHaveBeenCalled();
  }
}
