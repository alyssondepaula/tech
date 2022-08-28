import { Request, Response } from 'express';
import { ShowCategoriesUserCase } from './ShowCategoriesUserCase';

export class ShowCategoriesController {
  async handle(request: Request, response: Response) {

    const showCategoriesUserCase = new ShowCategoriesUserCase();
    const result = await showCategoriesUserCase.execute();

    response.append('X-Total-Count', String(result.length))

    return response.json(result);

  }
}