require('dotenv').config()
const express = require("express")
const http = require("http")
const mongoose = require("mongoose")
const uri = process.env.MONGODB_URI
const Article = require("./models/article")
const articleRouter = require("./routes/articles")
const methodOverride = require("method-override")
const app = express()

mongoose.connect(uri || "mongodb://localhost/blog")

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))

app.get("/", async (req, res) => {
    const articles = await Article.find().sort({ createdAt: "desc" })
    res.render("articles/index", { articles: articles })
})

app.use("/articles", articleRouter)
app.listen(process.env.PORT || 3000)