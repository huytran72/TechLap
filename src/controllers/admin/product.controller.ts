import { Request, Response } from "express"

const getAdminCreateProductPage = async (req: Request, res: Response) => {
  return res.render("client/product/detail.ejs")
}

export { getAdminCreateProductPage }
