import convict from 'convict';

const config = convict({
    mongo: {
      url: {
        doc: 'The Mongo connection URL',
        format: String,
        env: 'MONGO_URL',
        default: 'mongodb://localhost:27018/pantry-dev'
      }
    }
  });
  
  export default config;