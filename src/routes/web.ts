app.get("/", (req, res) => {
  res.render("home.ejs")
})

app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1>")
})

app.get("/contact", (req, res) => {
  res.send("Contact Us ............")
})
