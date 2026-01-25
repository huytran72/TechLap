// const express = require("express")

import express from "express"
import "dotenv/config"
import webRoutes from "./routes/web"
import innitDatabase from "config/seed"
import { z } from "zod"

const app = express()
const PORT = process.env.PORT || 8000

//config view engine
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

// config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// config static files: images/css/js
app.use(express.static("public"))

// config routes
webRoutes(app)

//seeding database
innitDatabase()

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

//config static files
app.use(express.static("public"))
