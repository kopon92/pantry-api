import { Command } from "../../Shared/domain/Command";
import { CommandHandler } from "../../Shared/domain/CommandHandler";
import { ProductRepository } from "../Domain/ProductRepository";
import { ProductId } from "../Domain/ValueObject/ProductId";
import { DeleteProductCommand } from "./Command/DeleteProductCommand";


export class DeleteProductCommandHandler implements CommandHandler<DeleteProductCommand> {
    private repository: ProductRepository;
    constructor(repository: ProductRepository) {
        this.repository = repository;
    }
    
    subscribedTo(): Command {
        return DeleteProductCommand;
    }

    async handle(command: DeleteProductCommand): Promise<void> {
        const id = new ProductId(command.id);

        await this.repository.delete(id);
    }
}
