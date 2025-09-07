// const express = require("express")

import express from "express"
import "dotenv/config"

const app = express()
const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
  res.send("Hello World nodemon")
})

app.get("/about", (req, res) => {
  res.send("About Us")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
