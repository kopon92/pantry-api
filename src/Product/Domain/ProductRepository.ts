import { Nullable } from "../../Shared/Domain/Nullable";
import { Product } from "./Product";

export interface ProductRepository {
    searchAll(): Promise<Nullable<Product[]>>;
}
