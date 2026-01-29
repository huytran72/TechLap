import { z } from "zod"

export const ProductSchema = z.object({
  name: z.string().trim().min(1),
  price: z.number().min(0),
  detailDesc: z.string().trim().min(1),
  shortDesc: z.string().trim().min(1).optional(),
  quantity: z.number().min(0),
  factory: z.string().trim().min(1),
  target: z.string().trim().min(1),

  //  name	      String @db.VarChar(255)
  // price		    Int
  // image		    String @db.VarChar(255)
  // detailDesc	String @db.VarChar(255)
  // shortDesc	  String @db.VarChar(255)
  // quantity	  Int
  // sold		    String @db.VarChar(255)
  // factory	    String @db.VarChar(255)
  // target		  String @db.VarChar(255)
})
