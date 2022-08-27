import { Request, Response } from 'express';
import { CreateProductUserCase } from './createProductUserCase';


export class CreateProductController {
  async handle(request: Request, response: Response) {
    const file = request.file;
    const { name, price, color, category_id } = request.body;

    const createProductUserCase = new CreateProductUserCase();
    const result = await createProductUserCase.execute({
      name,
      photo: file?.filename as string,
      price, 
      color,
      category_id
    });

    return response.json(result);
  }
}