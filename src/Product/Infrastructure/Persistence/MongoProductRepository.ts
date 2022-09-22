import { Nullable } from "../../../Shared/Domain/Nullable";
import { Product } from "../../Domain/Product";
import { ProductRepository } from "../../Domain/ProductRepository";
import { MongoRepository } from "../../../Shared/Infrastructure/Persistence/Mongo/MongoRepository";
import { ProductId } from "../../Domain/ValueObject/ProductId";

interface ProductMongo {
  _id: string,
  id: string,
  name: string,
  image: string,
  currentPrice: number,
  lastShoppingPrice: number,
}

export class MongoProductRepository extends MongoRepository<Product> implements ProductRepository {
  save(product: Product): Promise<void> {
    return this.persist(product.id.value, product);
  }

  public async searchAll(): Promise<Product[]> {
    const collection = await this.collection();
    const document = await collection.find().toArray();

    return this.hydrateItems(document);
  }

  public async search(id: ProductId): Promise<Nullable<Product>> {
    const collection = await this.collection();
    const document = await collection.findOne({ _id: id.value });

    return document ? Product.fromPrimitives({
      ...document,
      id: id.value,
      name: document.name,
      image: document.image,
      currentPrice: document.currentPrice,
      lastShoppingPrice: document.lastShoppingPrice,
    }) : null;
  }

  hydrateItems(products: any[]): Product[] {
    return products.map(product => Product.fromPrimitives({
      ...product,
      id: product._id,
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