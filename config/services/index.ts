import { ContainerBuilder, YamlFileLoader } from "node-dependency-injection";

const container = new ContainerBuilder();
const loader = new YamlFileLoader(container);

loader.load(`${__dirname}/app.yaml`);

export default container;
