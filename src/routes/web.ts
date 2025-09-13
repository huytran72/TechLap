import express, { Express } from "express"
import { get } from "http"

const router = express.Router()

const webRoutes = (app: Express) => {
  router.get("/", getHomepage)

  router.get("/about", (req, res) => {
    res.send("<h1>About Us......</h1>")
  })

  router.get("/contact", (req, res) => {
    res.send("Contact Us ............")
  })

  app.use("/", router)
}

export default webRoutes
