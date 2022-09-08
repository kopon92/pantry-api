import { Nullable } from "../../Shared/Domain/Nullable";
import { Product } from "./Product";

export interface ProductRepository {
    search(): Promise<Nullable<Product>>;
}
