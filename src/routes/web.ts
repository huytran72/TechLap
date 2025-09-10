import express from "express"

const router = express.Router()

const webRoutes = (app) => {
  router.get("/", (req, res) => {
    res.render("home.ejs")
  })

  router.get("/about", (req, res) => {
    res.send("<h1>About Us</h1>")
  })

  router.get("/contact", (req, res) => {
    res.send("Contact Us ............")
  })

  app.use("/", router)
}

export default webRoutes
