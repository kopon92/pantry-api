import { Nullable } from "../../Shared/Domain/Nullable";
import { Product } from "./Product";
import { ProductId } from "./ValueObject/ProductId";

export interface ProductRepository {
    save(product: Product): Promise<void>;
    searchAll(): Promise<Product[]>;
    search(id: ProductId): Promise<Nullable<Product>>;
    delete(id: ProductId): Promise<void>;
}
