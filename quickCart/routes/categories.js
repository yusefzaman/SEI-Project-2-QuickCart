const express = require("express")
const router = express.Router()
const categoryCtrl = require("../controllers/categories")

router.get("/", categoryCtrl.index)

module.exports = router
