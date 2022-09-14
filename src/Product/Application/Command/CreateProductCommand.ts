import { Command } from '../../../Shared/domain/Command';

type Params = {
    id: string;
    name: string;
    image: string;
    currentPrice: number;
    lastShoppingPrice: number;
};

export class CreateProductCommand extends Command {
    id: string;
    name: string;
    image: string;
    currentPrice: number;
    lastShoppingPrice: number;

    constructor({ id, name, image, currentPrice, lastShoppingPrice }: Params) {
        super();
        this.id = id;
        this.name = name;
        this.image = image;
        this.currentPrice = currentPrice;
        this.lastShoppingPrice = lastShoppingPrice;
    }
}
