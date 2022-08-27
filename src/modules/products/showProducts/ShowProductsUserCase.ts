require('dotenv').config()

import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../database/prismaClient';

export class ShowProductsUserCase {
  async execute() {
    
    const users = await prisma.product.findMany();
    return users;

  }
}