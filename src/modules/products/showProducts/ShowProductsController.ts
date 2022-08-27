import { Request, Response } from 'express';
import { ShowProductsUserCase } from './ShowProductsUserCase';

export class ShowProductsController {
  async handle(request: Request, response: Response) {
  
    const showProductsUserCase = new ShowProductsUserCase();
    const result = await showProductsUserCase.execute();

    return response.json(result);
  }
}