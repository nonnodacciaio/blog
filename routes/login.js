const express = require("express")
const router = express.Router()


router.get("/login", (req, res) => {
    res.render("articles/new")
})

router.post("/login", async (req, res) => {

})

module.exports = router