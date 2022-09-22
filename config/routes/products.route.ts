import { Express } from "express";

import ProductsGetController from "../../src/App/Ui/Http/Product/ProductsGetController";
import ProductPostController from "../../src/App/Ui/Http/Product/ProductPostController";
import ProductPutController from "../../src/App/Ui/Http/Product/ProductPutController";
import container from "../services";

export const register = (app: Express) => {
  const productsGetController: ProductsGetController = container.get(
    "App.Ui.Http.Product.ProductsGetController"
  );
  const productPostController: ProductPostController = container.get(
    "App.Ui.Http.Product.ProductPostController"
  );
  const productPutController: ProductPutController = container.get(
    "App.Ui.Http.Product.ProductPutController"
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
  app.put(
    "/api/product",
    ProductPutController.validator(), 
    productPutController.run.bind(productPutController)
  );
};
