const express = require('express')
const router = express.Router()
const itemsCtrl = require('../controllers/items')

router.get('/:id', itemsCtrl.showItemDetails)

module.exports = router
