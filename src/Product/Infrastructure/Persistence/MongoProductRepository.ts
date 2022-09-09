import { Nullable } from "../../../Shared/Domain/Nullable";
import { Product } from "../../Domain/Product";
import { ProductRepository } from "../../Domain/ProductRepository";
import productsJson from '../../../../data/products.json';
import { MongoRepository } from "../../../Shared/Infrastructure/Persistence/Mongo/MongoRepository";

interface ProductMongo {
  _id: string,
  id: string,
  name: string,
  image: string,
  currentPrice: number,
  lastShoppingPrice: number,
}
export class MongoProductRepository extends MongoRepository<Product> implements ProductRepository {

  public async search(): Promise<Nullable<Product[]>> {
    const collection = await this.collection();
    const document = await collection.find().toArray();

    if (!document) {
      return null;
    }

    return document ?
      this.hydrateItems(document)
      : null;
  }

  hydrateItems(products: any[]): Product[] {
    return products.map(product => Product.fromPrimitives({
      ...product,
      id: product.id,
      name: product.name,
      image: product.image,
      currentPrice: product.currentPrice,
      lastShoppingPrice: product.lastShoppingPrice,
    }));
  }

  protected moduleName(): string {
    return 'products';
  }
}