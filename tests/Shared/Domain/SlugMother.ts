import { MotherCreator } from './MotherCreator';

export class SlugMother {
  static random(): string {
    return MotherCreator.random().lorem.slug();
  }
}
