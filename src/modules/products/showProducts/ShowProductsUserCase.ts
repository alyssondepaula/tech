require('dotenv').config()

import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../database/prismaClient';

interface IShowProductsUserCase{
  limit: number | undefined;
}

export class ShowProductsUserCase {
  async execute({limit}: IShowProductsUserCase) {

    const products = await prisma.product.findMany(
       {
         take: limit,
       }
    );
    return products;

  }
}