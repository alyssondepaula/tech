require('dotenv').config()
import { hash } from 'bcrypt';
import { prisma } from '../../../database/prismaClient';

type IPRODUCTCREATE = {
  name: string;
  photo: string;
  price: string;
  color: string;
  rating: number; 
  discount: string;
  category_id: string;
}

export class CreateProductUserCase {
  async execute({ name, photo, price, color, rating, discount, category_id }: IPRODUCTCREATE) {

    const client = await prisma.product.create({
      data: {
        name: name,
        photo: photo,
        price: price,
        color: color,
        rating: rating,
        discount: discount,
        category_id: category_id
        
      },
    });

    return client;
  }
}