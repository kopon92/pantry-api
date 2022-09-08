export class ProductNotExist extends Error {
  constructor() {
    super('The product not exists');
  }
}
