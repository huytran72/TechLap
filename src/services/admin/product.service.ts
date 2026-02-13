import { prisma } from "config/client"

const createProduct = async (name: string, price: number) => {
  await prisma.product.create({
    data: {
      name,
      price,
    },
  })
}
