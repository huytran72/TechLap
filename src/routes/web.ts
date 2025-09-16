import express, { Express } from "express"
import { get } from "http"
import { getCreateUserPage, getHomePage } from "../controllers/user.controller"

const router = express.Router()

const webRoutes = (app: Express) => {
  router.get("/", getHomePage)
  router.get("/create-user", getCreateUserPage)
  router.post("/handle-create-user", getCreateUserPage)

  app.use("/", router)
}

export default webRoutes
