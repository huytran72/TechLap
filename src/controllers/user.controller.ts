import { Request, Response } from "express"

const getHomePage = (req: Request, res: Response) => {
  return res.render("home")
}

const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("create-user.ejs")
}

const postCreateUser = (req: Request, res: Response) => {
  const { fullname, email, address } = req.body

  console.log("check request: ", req.body)
  return res.redirect("/")
}

export { getHomePage, getCreateUserPage, postCreateUser }
