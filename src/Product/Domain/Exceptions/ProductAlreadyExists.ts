export class ProductAlreadyExists extends Error {
  constructor(id: string) {
    super(`Product ${id} already exists`);
  }
}
