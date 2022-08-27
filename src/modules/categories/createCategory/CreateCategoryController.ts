import { Request, Response } from 'express';
import { CreateCategoryUserCase } from './CreateCategoryUserCase';

export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const file = request.file;
    const { name } = request.body;

    const createCategoryUserCase = new CreateCategoryUserCase();
    const result = await createCategoryUserCase.execute({
      name,
      photo: file?.fieldname as string,
    });

    return response.json(result);
  }
}