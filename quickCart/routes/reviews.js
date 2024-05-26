const express = require('express')
const router = express.Router()
const reviewsCtrl = require('../controllers/reviews')

// POST /items/show/:id/reviews (create review for Item)
router.post('/items/show/:id/reviews', reviewsCtrl.create)

module.exports = router
