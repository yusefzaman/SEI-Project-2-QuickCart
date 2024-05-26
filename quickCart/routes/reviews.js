const express = require("express")
const router = express.Router()
const reviewsCtrl = require("../controllers/reviews")

router.post("/items/:id", reviewsCtrl.create)
router.delete("/items/:id", reviewsCtrl.delete)
// router.get("/:id/edit", reviewsCtrl.edit)
router.put("/items/:id", reviewsCtrl.update)

module.exports = router
