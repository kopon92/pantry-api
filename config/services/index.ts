import { ContainerBuilder, YamlFileLoader } from "node-dependency-injection";

const container = new ContainerBuilder();
const loader = new YamlFileLoader(container);
const environment = "dev";

loader.load(`${__dirname}/app_${environment}.yaml`);

export default container;
