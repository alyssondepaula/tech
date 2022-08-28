import { prisma } from '../../../database/prismaClient';

type TSHOWPRODUCT = {
  page: number | undefined;
  limit: number | undefined;
  order: Object
}

export class ShowProductsUserCase {
  async execute({limit, page, order}: TSHOWPRODUCT) {

    const products = await prisma.product.findMany(
      {
         orderBy: order,
         skip: page,
         take: limit,
       },
    );

    return products;

  }
}