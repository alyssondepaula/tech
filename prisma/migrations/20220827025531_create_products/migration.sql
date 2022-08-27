-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "photo" VARCHAR(255) NOT NULL,
    "price" DECIMAL(5,2) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
