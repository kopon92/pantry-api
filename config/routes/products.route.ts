import { Express } from "express";

import SearchAllProductsGetController from "../../src/App/Ui/Http/Product/SearchAllProductsGetController";
import SearchProductGetController from "../../src/App/Ui/Http/Product/SearchProductGetController";
import ProductPostController from "../../src/App/Ui/Http/Product/ProductPostController";
import ProductPutController from "../../src/App/Ui/Http/Product/ProductPutController";
import ProductDeleteController from "../../src/App/Ui/Http/Product/ProductDeleteController";
import container from "../services";

export const register = (app: Express) => {
  const searchAllProductsGetController: SearchAllProductsGetController = container.get(
    "App.Ui.Http.Product.SearchAllProductsGetController"
  );
  const searchProductGetController: SearchProductGetController = container.get(
    "App.Ui.Http.Product.SearchProductGetController"
  );
  const productPostController: ProductPostController = container.get(
    "App.Ui.Http.Product.ProductPostController"
  );
  const productPutController: ProductPutController = container.get(
    "App.Ui.Http.Product.ProductPutController"
  );
  const productDeleteController: ProductDeleteController = container.get(
    "App.Ui.Http.Product.ProductDeleteController"
  );
  app.get(
    "/api/products",
    searchAllProductsGetController.run.bind(searchAllProductsGetController)
  );
  app.get(
    "/api/product",
    SearchProductGetController.validator(), 
    searchProductGetController.run.bind(searchProductGetController)
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
  app.delete(
    "/api/product",
    ProductDeleteController.validator(), 
    productDeleteController.run.bind(productDeleteController)
  );
};
