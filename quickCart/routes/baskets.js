var express = require("express")
var router = express.Router()
const basketCtrl = require("../controllers/baskets")

router.get("/items/show/:id", itemsCtrl.show)
router.get("/items/show/:id", itemsCtrl.addToCart)

module.exports = router