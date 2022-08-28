import { prisma } from '../../../database/prismaClient';

type ISHOWPRODUCTSBYCATEGORY = {
  category: string;
  page: number | undefined;
  limit: number | undefined;
  order: Object;
}
export class ShowProductsByCategoryUserCase {
  async execute({category, page, limit, order}: ISHOWPRODUCTSBYCATEGORY) {
    
    const products = await prisma.product.findMany({
       where: {
        category_id: category
       },
       orderBy: order,
       skip: page,
       take: limit,
    });
    return products;
  }
}