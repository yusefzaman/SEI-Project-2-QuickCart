var express = require("express")
var router = express.Router()
const itemsCtrl = require("../controllers/items")
router.get("/items/show/:id", itemsCtrl.show)

module.exports = router
