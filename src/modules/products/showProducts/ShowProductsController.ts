import { Request, Response } from 'express';
import { isNumberObject } from 'util/types';
import { ShowProductsUserCase } from './ShowProductsUserCase';

export class ShowProductsController {
  async handle(request: Request, response: Response) {

    const { limit } = request.query;
   
    var take = limit !== undefined ? parseInt(limit as string)  : undefined;

    const showProductsUserCase = new ShowProductsUserCase();
    const result = await showProductsUserCase.execute({
      limit: take
    });

    return response.json(result);
  }
}