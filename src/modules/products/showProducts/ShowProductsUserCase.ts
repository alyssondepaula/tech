require('dotenv').config()

import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { sequelize } from '../../../database/connect';
import { User } from '../../../database/models/User';

type TAUTH = {
  firstName: string;
  password: string;
}

export class ShowProductsUserCase {
  async execute({ firstName, password }: TAUTH) {
    
     
    const client: User | null = await User.findOne({
      where: {
        firstName,
      },
    });


    if (!client) {
      throw new Error('Username or password invalid!');
    }

    

    var secret: string = process.env.SECRET_KEY || "";

    const token = sign({ firstName }, secret, {
      subject: String(client.id),
      expiresIn: '1d',
    });

    return token;
  }
}