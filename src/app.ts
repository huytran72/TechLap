// const express = require("express")

import express from "express"
import "dotenv/config"
import webRoutes from "./routes/web"
import { get } from "http"
import { getConnection } from "./config/database"

const app = express()
const PORT = process.env.PORT || 8000

//config view engine
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

// config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// config routes
webRoutes(app)

getConnection()

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  console.log("ENV PORT:", process.env.PORT)
})

//config static files
app.use(express.static("public"))
