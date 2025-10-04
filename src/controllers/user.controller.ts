import { Request, Response } from "express"
import {
  getAllUsers,
  getUserById,
  handleCreateUser,
  handleDeleteUser,
} from "services/user.service"

const getHomePage = async (req: Request, res: Response) => {
  const users = await getAllUsers()
  return res.render("home", { users: users })
}

const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("create-user.ejs")
}

const postCreateUser = async (req: Request, res: Response) => {
  const { name, email, address } = req.body

  //handle data here
  await handleCreateUser(name, email, address)
  return res.redirect("/")
}

const postDeleteUser = async (req: Request, res: Response) => {
  const { id } = req.params

  //handle data here
  await handleDeleteUser(id)
  return res.redirect("/")
}

const getViewUser = async (req: Request, res: Response) => {
  const { id } = req.params

  const user = await getUserById(id)
  return res.render("view-user.ejs", { id: id, user: user })
}

const postUpdateUser = async (req: Request, res: Response) => {
  const { id } = req.body

  const user = await getUserById(id)
  return res.redirect("/")
}

export {
  getHomePage,
  getCreateUserPage,
  postCreateUser,
  postDeleteUser,
  getViewUser,
  postUpdateUser,
}
