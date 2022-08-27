import { prisma } from '../../../database/prismaClient';

export class ShowCategoriesUserCase {
  async execute() {
    
    const category = await prisma.category.findMany()

    return category;
  }
}