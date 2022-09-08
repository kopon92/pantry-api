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
  public async search(): Promise<Nullable<Product[]>> {
    return productsJson ?
      this.hydrateItems(productsJson.products)
      : null;
  }

  hydrateItems(productsJson:ProductJson[]): Product[] {
    return productsJson.map(
      function (product) {
        return Product.fromPrimitives({
          ...product,
          id: product.id,
          name: product.name,
          image: product.image,
          currentPrice: product.currentPrice,
          lastShoppingPrice: product.lastShoppingPrice,
        });
      });
  }
}