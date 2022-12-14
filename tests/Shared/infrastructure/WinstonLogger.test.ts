import WinstonLogger from '../../../src/Shared/Infrastructure/Logger/WinstonLogger';

describe('WinstonLogger', () => {
  const winstonLogger = new WinstonLogger();

  it('logs a debug message', () => {
    winstonLogger.debug('debug message');
  });

  it('logs an error message', () => {
    winstonLogger.error('error message');
  });

  it('logs an info message', () => {
    winstonLogger.info('info message');
  });
});
