import { z } from "zod"

export const ProductSchema = z.object({
  username: z.string(),

   name	      String @db.VarChar(255)
  price		    Int 
  image		    String @db.VarChar(255)
  detailDesc	String @db.VarChar(255)
  shortDesc	  String @db.VarChar(255)
  quantity	  Int
  sold		    String @db.VarChar(255)
  factory	    String @db.VarChar(255)
  target		  String @db.VarChar(255)
})
