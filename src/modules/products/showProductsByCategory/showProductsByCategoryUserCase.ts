import { prisma } from '../../../database/prismaClient';

interface ISHOWPRODUCTSBYCATEGORY {
  category: string;
}


export class ShowProductsByCategoryUserCase {
  async execute({category}: ISHOWPRODUCTSBYCATEGORY) {
    
    const users = await prisma.product.findMany({
      where: {
        category_id: category
      }
    });
    return users;
  }
}