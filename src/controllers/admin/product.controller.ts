import { Request, Response } from "express"
import { TProductSchema, ProductSchema } from "src/validation/product.schema"

const getAdminCreateProductPage = async (req: Request, res: Response) => {
  return res.render("admin/product/create.ejs")
}

const postAdminCreateProduct = async (req: Request, res: Response) => {
  const { name } = req.body as TProductSchema

  try {
    const result = ProductSchema.parse(req.body)
  } catch (error) {
    console.log("Error creating product:", error)
  }

  return res.redirect("/admin/product")
}

export { getAdminCreateProductPage, postAdminCreateProduct }
