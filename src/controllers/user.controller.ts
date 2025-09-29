import { Request, Response } from "express"
import {
  getAllUsers,
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
  const { fullName, email, address } = req.body

  //handle data here
  await handleCreateUser(fullName, email, address)
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
  // You can implement the logic to fetch and display user details here
  return res.render("view-user.ejs", { userId: id })
}

export {
  getHomePage,
  getCreateUserPage,
  postCreateUser,
  postDeleteUser,
  getViewUser,
}
