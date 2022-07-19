const express = require("express")
const router = express.Router()


router.get("/login", (req, res) => {
    res.render("./views/login")
})

router.post("/login", async (req, res) => {

})

module.exports = router