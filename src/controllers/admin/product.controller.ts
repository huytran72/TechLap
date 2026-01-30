import { Request, Response } from "express"
import { TProductSchema } from "src/validation/product.schema"

const getAdminCreateProductPage = async (req: Request, res: Response) => {
  return res.render("admin/product/create.ejs")
}

const postAdminCreateProduct = async (req: Request, res: Response) => {
  const { name } = req.body as TProductSchema

  return res.redirect("/admin/product")
}

export { getAdminCreateProductPage, postAdminCreateProduct }
