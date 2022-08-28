import { Request, Response } from 'express';
import { ShowProductsByCategoryUserCase } from './showProductsByCategoryUserCase';

export class ShowProductsByCategoryController {
  async handle(request: Request, response: Response) {

    const { category } = request.params; 

    const { limit } = request.query;
    const { page } = request.query;
    const { order } = request.query;
   
    var take = limit !== undefined ? parseInt(limit as string)  : undefined;
    var skip = page !== undefined ? ((parseInt(page as string)-1) * (take || 0))  : 0;
    var orderBy = order !== undefined ? JSON.parse(order as string): { createdAt: 'asc' };
  
    const showProductsByCategoryUserCase = new ShowProductsByCategoryUserCase();
    const result = await showProductsByCategoryUserCase.execute({
         category,
         page: skip,
         limit: take,
         order: orderBy
      });

    response.append('X-Total-Count', String(result.length))

    return response.json(result);
  }
}