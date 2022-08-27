import { Request, Response } from 'express';
import { AuthUserCase } from './AuthUserCase';

export class AuthController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authUserCase = new AuthUserCase();
    const result = await authUserCase.execute({
      email,
      password,
    });

    return response.json(result);
  }
}