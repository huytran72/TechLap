import { z } from "zod"

export const ProductSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }),
  price: z.number().min(0, { message: "Price must be non-negative" }),
  detailDesc: z.string().trim().min(1),
  shortDesc: z.string().trim().min(1).optional(),
  quantity: z.number().min(0),
  factory: z.string().trim().min(1),
  target: z.string().trim().min(1),
})

export type TProductSchema = z.infer<typeof ProductSchema>
