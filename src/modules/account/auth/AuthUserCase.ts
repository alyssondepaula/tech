require('dotenv').config()

import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../database/prismaClient';

type TAUTH = {
  email: string;
  password: string;
}

export class AuthUserCase {
  async execute({ email, password }: TAUTH) {
    
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if (!user) {
      throw new Error('User invalid!');
    }

    const isSamePassword = await compare(password, user.password);

    if (!isSamePassword) {
      throw new Error('Password invalid!');
    }
        
    var secret: string = process.env.SECRET_KEY || "";

    const token = sign({ email }, secret, {
      subject: String(user.id),
      expiresIn: '1d',
    });

    return { 
      user,
      token
     }
  }
}