const express = require("express")

const app = express()
const PORT = 8080

app.get("/", () => {
  return "Hello World"
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
