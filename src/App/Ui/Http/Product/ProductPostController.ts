import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { validationResult, ValidationError, matchedData, body, ValidationChain } from 'express-validator';

import { CreateProductCommand } from '../../../../Product/Application/Command/CreateProductCommand';
import { ProductAlreadyExists } from '../../../../Product/Domain/Exceptions/ProductAlreadyExists';
import { CommandBus } from '../../../../Shared/domain/CommandBus';
import { Controller } from '../Controller';

export default class ProductPostController implements Controller {
  constructor(private commandBus: CommandBus) { }


  static validator(): ValidationChain[] {
    return [
      body('name').isString().withMessage('Invalid name'),
      body('image').isString().withMessage('Invalid image'),
      body('currentPrice').isNumeric().withMessage('Invalid current price'),
      body('lastShoppingPrice').isNumeric().withMessage('Invalid last shopping price'),
    ];
  }


  async run(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(httpStatus.BAD_REQUEST).json({ errors: errors.array() });
    }      

    await this.createProduct(req, res);
  }

  private async createProduct(req: Request, res: Response) {
    const name: string = req.body.name;
    const image: string = req.body.image;
    const currentPrice: number = req.body.currentPrice;
    const lastShoppingPrice: number = req.body.lastShoppingPrice;
    const createProductCommand = new CreateProductCommand({ name, image, currentPrice, lastShoppingPrice });
console.log(111)
    try {
      await this.commandBus.dispatch(createProductCommand);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }

    res.status(httpStatus.CREATED).send();
  }
}
