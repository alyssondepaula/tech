-- AlterTable
ALTER TABLE "products" ADD COLUMN     "discount" VARCHAR(255) DEFAULT '10',
ADD COLUMN     "rating" DECIMAL(2,2);
