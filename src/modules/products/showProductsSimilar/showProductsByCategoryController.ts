import { Request, Response } from 'express';
import { ShowProductsByCategoryUserCase } from './showProductsByCategoryUserCase';

export class ShowProductsController {
  async handle(request: Request, response: Response) {

    const { filter } = request.params; 
  
    const showProductsByCategoryUserCase = new ShowProductsByCategoryUserCase();
    const result = await showProductsByCategoryUserCase.execute({
        filter
      });

    return response.json(result);
  }
}