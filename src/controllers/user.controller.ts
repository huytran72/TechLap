import { Request, Response } from "express"

const getHomePage = (req: Request, res: Response) => {
  return res.render("home")
}

const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("create-user.ejs")
}

const postCreateUser = (req: Request, res: Response) => {
  return res.render("home")
}

export { getHomePage, getCreateUserPage, postCreateUser }
