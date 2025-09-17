// const express = require("express")

import express from "express"
import "dotenv/config"
import webRoutes from "./routes/web"

const app = express()
const PORT = process.env.PORT || 8080

//config view engine
app.set("view engine", "ejs")
app.set("views", "src/views")

// congfig routes
webRoutes(app)

//config static files
app.use(express.static("public"))

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  console.log("ENV PORT:", process.env.PORT)
})
