const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {
    res.render("articles/new")
})

router.post("/", async (req, res) => {

})

module.exports = router