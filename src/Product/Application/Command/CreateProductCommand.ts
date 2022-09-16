import { Command } from '../../../Shared/domain/Command';

type Params = {
    name: string;
    image: string;
    currentPrice: number;
    lastShoppingPrice: number;
};

export class CreateProductCommand extends Command {
    name: string;
    image: string;
    currentPrice: number;
    lastShoppingPrice: number;

    constructor({ name, image, currentPrice, lastShoppingPrice }: Params) {
        super();
        this.name = name;
        this.image = image;
        this.currentPrice = currentPrice;
        this.lastShoppingPrice = lastShoppingPrice;
    }
}
