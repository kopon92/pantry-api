import { Express } from "express";

import SearchAllProductsGetController from "../../src/App/Ui/Http/Product/SearchAllProductsGetController";
import ProductPostController from "../../src/App/Ui/Http/Product/ProductPostController";
import ProductPutController from "../../src/App/Ui/Http/Product/ProductPutController";
import container from "../services";

export const register = (app: Express) => {
  const searchAllProductsGetController: SearchAllProductsGetController = container.get(
    "App.Ui.Http.Product.SearchAllProductsGetController"
  );
  const productPostController: ProductPostController = container.get(
    "App.Ui.Http.Product.ProductPostController"
  );
  const productPutController: ProductPutController = container.get(
    "App.Ui.Http.Product.ProductPutController"
  );
  app.get(
    "/api/products",
    searchAllProductsGetController.run.bind(searchAllProductsGetController)
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
