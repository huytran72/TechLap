import e, { Request, Response } from "express"
import { TProductSchema, ProductSchema } from "src/validation/product.schema"

const getAdminCreateProductPage = async (req: Request, res: Response) => {
  const errors = []
  const oldDate = {}
  return res.render("admin/product/create.ejs", { errors })
}

const postAdminCreateProduct = async (req: Request, res: Response) => {
  const { name } = req.body as TProductSchema

  const validate = ProductSchema.safeParse(req.body)

  if (!validate.success) {
    // error in validation
    const errorsZod = validate.error.issues
    const errors = errorsZod.map((item) => `${item.message} (${item.path[0]})`)
    return res.render("admin/product/create.ejs", { errors })
  }
  // success in validation
  return res.redirect("/admin/product")
}

export { getAdminCreateProductPage, postAdminCreateProduct }
