import { Request, Response } from 'express';
import { ShowProductsUserCase } from './ShowProductsUserCase';

export class AuthController {
  async handle(request: Request, response: Response) {
    const { firstName, password } = request.body;

    const showProductsUserCase = new ShowProductsUserCase();
    const result = await showProductsUserCase.execute({
      firstName,
      password,
    });

    return response.json(result);
  }
}