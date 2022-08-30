import { Express } from "express";

import ProductsGetController from "../../src/App/Ui/Http/Product/ProductsGetController";
import container from "../services";

export const register = (app: Express) => {
  const productsGetController: ProductsGetController = container.get(
    "App.Ui.Http.Product.ProductsGetController"
  );
  app.get(
    "/api/products",
    productsGetController.run.bind(ProductsGetController)
  );
};
