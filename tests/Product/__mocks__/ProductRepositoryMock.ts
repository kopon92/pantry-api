import { ProductRepository } from '../../../src/Product/Domain/ProductRepository';
import { Product } from '../../../src/Product/Domain/Product';
import { Nullable } from '../../../src/Shared/Domain/Nullable';

export class ProductRepositoryMock implements ProductRepository {
  private mockSearch = jest.fn();
  products: Product[] = [];

  returnOnSearchAll(products: Product[]) {
    this.products = products;
  }

  async searchAll(): Promise<Nullable<Product[]>> {
    this.mockSearch();
    return this.products;
  }

  assertSearchAll() {
    expect(this.mockSearch).toHaveBeenCalled();
  }
}
