import { Nullable } from "../../../Shared/Domain/Nullable";
import { Product } from "../../Domain/Product";
import { ProductRepository } from "../../Domain/ProductRepository";
import ProductsJson from '../../../../data/products.json';

export class JsonProductRepository implements ProductRepository {
  public async search(): Promise<Nullable<Product>> {
    return ProductsJson ? Product.fromPrimitives({ ...ProductsJson, id: ProductsJson.products[0].id }) : null;
  }
}
