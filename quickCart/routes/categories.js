const express = require("express")
const router = express.Router()
const categoriesCtrl = require("../controllers/categories")

router.get("/", categoriesCtrl.index)
router.post("/", categoriesCtrl.create)

module.exports = router
