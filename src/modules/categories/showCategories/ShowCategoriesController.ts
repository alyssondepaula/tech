import { Request, Response } from 'express';
import { ShowCategoriesUserCase } from './ShowCategoriesUserCase';

export class ShowCategoriesController {
  async handle(request: Request, response: Response) {

    const showCategoriesUserCase = new ShowCategoriesUserCase();
    const result = await showCategoriesUserCase.execute();

    return response.json(result);

  }
}