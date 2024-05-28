var express = require("express")
var router = express.Router()
const basketController = require("../controllers/basket")

router.post("/:id/baskets", basketController.addToCart)

module.exports = router
