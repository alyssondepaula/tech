require('dotenv').config()
import { hash } from 'bcrypt';
import { prisma } from '../../../database/prismaClient';

type TUSER = {
  firstName: string;
  lastName?: string
  email: string;
  password: string;
  
}

export class CreateUserUserCase {
  async execute({ email, password, firstName, lastName }: TUSER) {
    const clientExists = await prisma.user.findFirst({
      where: {
        email: email
      },
    });

    if (clientExists) {
      throw new Error('User already exists');
    }

    const hashPassword = await hash(password, 10);

    const client = await prisma.user.create({
      data: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: hashPassword,
      },
    });

    return client;
  }
}