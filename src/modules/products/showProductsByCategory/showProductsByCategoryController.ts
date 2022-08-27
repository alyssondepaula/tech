import { Request, Response } from 'express';
import { ShowProductsByCategoryUserCase } from './showProductsByCategoryUserCase';

export class ShowProductsByCategoryController {
  async handle(request: Request, response: Response) {

    const { category } = request.params; 
  
    const showProductsByCategoryUserCase = new ShowProductsByCategoryUserCase();
    const result = await showProductsByCategoryUserCase.execute({
         category
      });

    return response.json(result);
  }
}