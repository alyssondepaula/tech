import { Request, Response } from 'express';
import { ShowProductsByNewsUserCase } from './showProductsByNewsUserCase';

export class ShowProductsByNewsController {
  async handle(request: Request, response: Response) {
  
    const showProductsByNewsUserCase = new ShowProductsByNewsUserCase();
    const result = await showProductsByNewsUserCase.execute();

    return response.json(result);
  }
}