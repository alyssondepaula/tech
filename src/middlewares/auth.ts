import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';


export async function AuthMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ message: 'Token is missing' });
  }

  const [, token] = authHeader.split(' ');

  try {
   
    var secret: string = process.env.SECRET_KEY || "";
    verify(token, secret);
    return next();
    
  } catch (error) {
    return response.status(401).json({ message: 'Token is Invalid!' });
  }
}