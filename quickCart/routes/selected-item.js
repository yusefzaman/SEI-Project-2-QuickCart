var express = require("express")
var router = express.Router()
const selectedCtrl = require("../controllers/basket")

router.get("/basket/:id/item", selectedCtrl.createCart)

module.exports = router
