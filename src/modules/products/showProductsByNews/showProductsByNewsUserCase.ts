import { prisma } from '../../../database/prismaClient';


export class ShowProductsByNewsUserCase {
  async execute() {
    
    const products = await prisma.product.findMany({
       orderBy: {
         createdAt: 'desc'
       }
    });
    return products;
  }
}