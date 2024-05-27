const express = require("express")
const router = express.Router()
const reviewsCtrl = require("../controllers/reviews")
const ensureLoggedIn = require("../config/ensureLoggedIn")

router.post("/items/:id", ensureLoggedIn, reviewsCtrl.create)
router.delete("/items/:id", ensureLoggedIn, reviewsCtrl.delete)
router.put("/items/:id", ensureLoggedIn, reviewsCtrl.update)

module.exports = router
