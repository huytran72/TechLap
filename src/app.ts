// const express = require("express")

import express from "express"
import "dotenv/config"

const app = express()
const PORT = process.env.PORT || 8080

//config view engine
app.set("view engine", "ejs")
app.set("views", "src/views")

app.get("/", (req, res) => {
  res.render("home.ejs")
})

app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1>")
})

app.get("/contact", (req, res) => {
  res.send("Contact Us ............")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  console.log("ENV PORT:", process.env.PORT)
})
