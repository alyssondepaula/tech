import { Request, Response } from 'express';
import { CreateUserUserCase } from './createUserUserCase';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, password, firstName, lastName } = request.body;

    const createUserUserCase = new CreateUserUserCase();
    const result = await createUserUserCase.execute({
      email,
      password,
      firstName, 
      lastName
    });

    return response.json(result);
  }
}