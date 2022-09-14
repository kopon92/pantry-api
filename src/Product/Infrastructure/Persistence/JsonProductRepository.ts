import { Nullable } from "../../../Shared/Domain/Nullable";
import { Product } from "../../Domain/Product";
import { ProductRepository } from "../../Domain/ProductRepository";
import productsJson from '../../../../data/products.json';

interface ProductJson {
  id: string,
  name: string,
  image: string,
  currentPrice: number,
  lastShoppingPrice: number,
}
export class JsonProductRepository implements ProductRepository {
  save(product: Product): Promise<void> {
    throw new Error("Method not implemented.");
  }
  public async searchAll(): Promise<Product[]> {
    return this.hydrateItems(productsJson.products);
  }

  hydrateItems(productsJson:ProductJson[]): Product[] {
    return productsJson.map(
      function (product) {
        return Product.fromPrimitives({...product});
      });
  }
}