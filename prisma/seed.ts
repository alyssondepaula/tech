import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt';
const prisma = new PrismaClient()

async function main() {

    const hashPassword = await hash('password', 10);

    await prisma.user.create({
        data: {
            firstName: 'Tech',
            lastName: 'Api',
            email: 'tech@api.com.br',
            password: hashPassword
        },
      });

    await prisma.category.createMany({
        data: [
          { id: 'c1', name: 'Fone de ouvido', photo: 'c1.png' },
          { id: 'c2', name: 'Carregador', photo: 'c2.png' },
          { id: 'c3', name: 'Computador', photo: 'c3.png' },
          { id: 'c4', name: 'Casa Inteligente', photo: 'c4.png' },
          { id: 'c5', name: 'Acessórios', photo: 'c5.png' },
          { id: 'c6', name: 'Televisores', photo: 'c6.png' },
          { id: 'c7', name: 'Projetores', photo: 'c7.png' },
          { id: 'c8', name: 'Celulares', photo: 'c8.png' }
        ],
        skipDuplicates: true
      });

      await prisma.product.create({
        data: { name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD', photo: 'p1.png', price: '600.00', color: 'Prata', discount: '10', rating: '3.5',category_id: 'c3' }
      });

      await prisma.product.create({
        data: { name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD', photo: 'p2.png', price: '600.00', color: 'Preto',  discount: '10', rating: '2.5',category_id: 'c3' }
      });

      await prisma.product.create({
        data: { name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD', photo: 'p3.png', price: '600.00', color: 'Prata',  discount: '10', rating: '4.5',category_id: 'c3' }
      });

      await prisma.product.create({
        data: { name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD', photo: 'p4.png', price: '600.00', color: 'Prata',  discount: '10', rating: '4.0', category_id: 'c3' }
      });

      await prisma.product.create({
        data: { name: 'Notebook VAIO® FE15 Intel® Core™ i7 + Headphone G300', photo: 'p5.png', price: '600.00',  discount: '10', rating: '5.0', category_id: 'c3' },
      });

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })