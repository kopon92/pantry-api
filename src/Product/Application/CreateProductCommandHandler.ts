import { Command } from "../../Shared/domain/Command";
import { CommandHandler } from "../../Shared/domain/CommandHandler";
import { Product } from "../Domain/Product";
import { ProductRepository } from "../Domain/ProductRepository";
import { ProductId } from "../Domain/ValueObject/ProductId";
import { ProductImage } from "../Domain/ValueObject/ProductImage";
import { ProductName } from "../Domain/ValueObject/ProductName";
import { ProductPrice } from "../Domain/ValueObject/ProductPrice";
import { CreateProductCommand } from "./Command/CreateProductCommand";


export class CreateProductCommandHandler implements CommandHandler<CreateProductCommand> {
    private repository: ProductRepository;
    constructor(repository: ProductRepository) {
        this.repository = repository;
    }
    subscribedTo(): Command {
        return CreateProductCommand;
    }

    async handle(command: CreateProductCommand): Promise<void> {
        const name = new ProductName(command.name);
        const image = new ProductImage(command.image);
        const currentPrice = new ProductPrice(command.currentPrice);
        const lastShoppingPrice = new ProductPrice(command.lastShoppingPrice);

        const product = Product.create(name, image, currentPrice, lastShoppingPrice);

        await this.repository.save(product);
    }
}
