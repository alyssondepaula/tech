import { prisma } from '../../../database/prismaClient';

type TCREATECATEGORY = {
  name: string;
  photo: string;
}

export class CreateCategoryUserCase {
  async execute({ name, photo }: TCREATECATEGORY) {
     
    const category = await prisma.category.create({
      data: {
         name: name,
         photo: photo
      }
    })

    return category;
  }
}