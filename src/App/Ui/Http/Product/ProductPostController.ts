import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { CreateProductCommand } from '../../../../Product/Application/Command/CreateProductCommand';
import { ProductAlreadyExists } from '../../../../Product/Domain/Exceptions/ProductAlreadyExists';
import { CommandBus } from '../../../../Shared/domain/CommandBus';
import { Controller } from '../Controller';

export default class ProductPostController implements Controller {
  constructor(private commandBus: CommandBus) { }

  async run(req: Request, res: Response) {
    const id: string = req.params.id;
    const name: string = req.body.name;
    const image: string = req.body.image;
    const currentPrice: number = req.body.currentPrice;
    const lastShoppingPrice: number = req.body.lastShoppingPrice;
    const createProductCommand = new CreateProductCommand({ id, name, image, currentPrice, lastShoppingPrice });

    try {
      await this.commandBus.dispatch(createProductCommand);
    } catch (error) {
      if (error instanceof ProductAlreadyExists) {
        res.status(httpStatus.BAD_REQUEST).send(error.message);
      } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
      }
    }

    res.status(httpStatus.CREATED).send();
  }
}
