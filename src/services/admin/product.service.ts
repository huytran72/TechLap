import {prisma} from "config/client"

const createProduct = async (
    name: string,
    price: number,
)