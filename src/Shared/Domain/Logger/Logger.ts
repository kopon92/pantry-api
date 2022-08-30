export default interface Logger {
  debug(message: string): void;
  error(message: Error): void;
  info(message: string): void;
}
