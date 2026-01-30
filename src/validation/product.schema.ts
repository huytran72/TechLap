import { z } from "zod"

export const ProductSchema = z.object({
  name: z.string().trim().min(1),
  price: z.number().min(0),
  detailDesc: z.string().trim().min(1),
  shortDesc: z.string().trim().min(1).optional(),
  quantity: z.number().min(0),
  factory: z.string().trim().min(1),
  target: z.string().trim().min(1),
})

export type TProductSchema = z.infer<typeof ProductSchema>
