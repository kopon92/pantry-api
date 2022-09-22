import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { validationResult, body, ValidationChain } from 'express-validator';

import { DeleteProductCommand } from '../../../../Product/Application/Command/DeleteProductCommand';
import { CommandBus } from '../../../../Shared/domain/CommandBus';
import { Controller } from '../Controller';

export default class ProductDeleteController implements Controller {
  constructor(private commandBus: CommandBus) { }


  static validator(): ValidationChain[] {
    return [
      body('id').isUUID().withMessage('Invalid id'),
    ];
  }


  async run(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(httpStatus.BAD_REQUEST).json({ errors: errors.array() });
    }

    await this.deleteProduct(req, res);
  }

  private async deleteProduct(req: Request, res: Response) {
    const id: string = req.body.id;
    const deleteProductCommand = new DeleteProductCommand(id);

    try {
      await this.commandBus.dispatch(deleteProductCommand);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }

    res.status(httpStatus.OK).send();
  }
}
