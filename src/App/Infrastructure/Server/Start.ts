import App from "../../App";

try {
  new App().start().catch(handleError);
} catch (error) {
  handleError(error);
}

process.on("uncaughtException", () => {
  process.exit(1);
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleError(error: any) {
  throw new Error(error);
  process.exit(1);
}
