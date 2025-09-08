// const express = require("express")

import express from "express"
import "dotenv/config"

const app = express()
const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
  res.send(`<h1 style="color: blue;">Hello World nodemon</h1>`)
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
