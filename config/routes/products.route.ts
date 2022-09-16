import { Express } from "express";

import ProductsGetController from "../../src/App/Ui/Http/Product/ProductsGetController";
import ProductPostController from "../../src/App/Ui/Http/Product/ProductPostController";
import container from "../services";

export const register = (app: Express) => {
  const productsGetController: ProductsGetController = container.get(
    "App.Ui.Http.Product.ProductsGetController"
  );
  const productPostController: ProductPostController = container.get(
    "App.Ui.Http.Product.ProductPostController"
  );
  app.get(
    "/api/products",
    productsGetController.run.bind(productsGetController)
  );
  app.post(
    "/api/product",
    ProductPostController.validator(), 
    productPostController.run.bind(productPostController)
  );
};
