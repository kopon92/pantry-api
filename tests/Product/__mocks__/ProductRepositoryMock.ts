import { ProductRepository } from '../../../src/Product/Domain/ProductRepository';
import { Product } from '../../../src/Product/Domain/Product';
import { Nullable } from '../../../src/Shared/Domain/Nullable';
import { ProductId } from '../../../src/Product/Domain/ValueObject/ProductId';

export class ProductRepositoryMock implements ProductRepository {
  private mockSearchAll = jest.fn();
  private mockSearch = jest.fn();
  private mockSave = jest.fn();
  product: Nullable<Product> = null;
  products: Product[] = [];

  returnOnSearchAll(products: Product[]) {
    this.products = products;
  }

  async searchAll(): Promise<Product[]> {
    this.mockSearchAll();
    return this.products;
  }

  assertSearchAll() {
    expect(this.mockSearchAll).toHaveBeenCalled();
  }

  returnOnSearch(product: Product) {
    this.product = product;
  }

  async search(id: ProductId): Promise<Nullable<Product>> {
    this.mockSearch(id);
    return this.product;
  }

  assertSearch() {
    expect(this.mockSearch).toHaveBeenCalled();
  }
  
  save(product: Product): Promise<void> {
    this.mockSave(product);
    return this.mockSave(product);
  }

  assertLastSavedProductIs(expected: Product): void {
    const mock = this.mockSave.mock;
    const lastSavedProduct = mock.calls[mock.calls.length - 1][0] as Product;
    expect(lastSavedProduct).toBeInstanceOf(Product);
    expect(lastSavedProduct.toPrimitives()).toEqual(expected.toPrimitives());
  }
}
