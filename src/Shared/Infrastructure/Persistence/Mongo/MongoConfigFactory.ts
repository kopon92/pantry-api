import config from '../../Config';
import MongoConfig from './MongoConfig';

export class MongoConfigFactory {
  static createConfig(): MongoConfig {
    return {
      url: config.get('mongo.url')
    };
  }
}
