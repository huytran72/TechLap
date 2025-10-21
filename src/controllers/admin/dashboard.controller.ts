import { Request, Response } from "express"
const getHomePage = async (req: Request, res: Response) => {
  return res.render("home", { users: users })
}
