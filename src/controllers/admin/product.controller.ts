import { Request, Response } from "express"
import { TProductSchema, ProductSchema } from "src/validation/product.schema"

const getAdminCreateProductPage = async (req: Request, res: Response) => {
  return res.render("admin/product/create.ejs")
}

const postAdminCreateProduct = async (req: Request, res: Response) => {
  const { name } = req.body as TProductSchema

  const validate = ProductSchema.safeParse(req.body)

  if (!validate.success) {
    // error in validation
  }
  // success in validation
  return res.redirect("/admin/product")
}

export { getAdminCreateProductPage, postAdminCreateProduct }
