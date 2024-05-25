const express = require("express")
const router = express.Router()
const categoriesCtrl = require("../controllers/categories")

router.get("/", categoriesCtrl.index)
router.get("/:id", categoriesCtrl.show)
router.get("/items/show/:id", categoriesCtrl.showItemDetails)
module.exports = router
