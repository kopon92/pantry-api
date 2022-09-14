import { Nullable } from "../../Shared/Domain/Nullable";
import { Product } from "./Product";

export interface ProductRepository {
    save(product: Product): Promise<void>;
    searchAll(): Promise<Product[]>;
}
