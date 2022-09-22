import { Command } from '../../../Shared/domain/Command';

export class DeleteProductCommand extends Command {
    id: string;

    constructor(id: string) {
        super();
        this.id = id;
    }
}
