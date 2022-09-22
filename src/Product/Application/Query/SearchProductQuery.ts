import { Query } from "../../../Shared/Domain/Query";

export class SearchProductQuery implements Query {
    id: string;

    constructor(id: string) {
        this.id = id;
    }
}
