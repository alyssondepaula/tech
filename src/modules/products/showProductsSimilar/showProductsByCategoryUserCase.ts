import { prisma } from '../../../database/prismaClient';

interface ISHOWPRODUCTSBYCATEGORY {
  filter: string;
}


export class ShowProductsByCategoryUserCase {
  async execute({filter}: ISHOWPRODUCTSBYCATEGORY) {
    
    const users = await prisma.product.findMany({
      where: {
        category_id: filter
      }
    });
    return users;
  }
}