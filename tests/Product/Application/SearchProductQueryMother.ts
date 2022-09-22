import { SearchProductQuery } from '../../../src/Product/Application/Query/SearchProductQuery';
import { ProductIdMother } from '../Domain/ProductIdMother';

export class SearchProductQueryMother {
  static create(id: string): SearchProductQuery {
    return new SearchProductQuery(id);
  }

  static random(): SearchProductQuery {
    return this.create(
      ProductIdMother.random().value,
    );
  }
}
