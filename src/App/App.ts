import { Server } from "../Shared/Infrastructure/Server/Server";

export default class App {
  private server?: Server;

  public start(): Promise<void> {
    const port = process.env.port || "3000";
    this.server = new Server(port);

    return this.server.listen();
  }

  protected async stop(): Promise<void> {
    await this.server?.stop();
  }

  public port(): string {
    if (!this.server) {
      throw new Error("Application has not been started");
    }

    return this.server.port;
  }

  public httpServer() {
    return this.server?.httpServer;
  }
}
