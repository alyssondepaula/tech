require('dotenv').config()
import { hash } from 'bcrypt';
import { prisma } from '../../../database/prismaClient';

interface IProduct {
  name: string;
  photo: string;
  price: string;
  color: string;
  category_id: string;
}

export class CreateProductUserCase {
  async execute({ name, photo, price, color, category_id }: IProduct) {

    const client = await prisma.product.create({
      data: {
        name: name,
        photo: photo,
        price: price,
        color: color,
        category_id: category_id
        
      },
    });

    return client;
  }
}