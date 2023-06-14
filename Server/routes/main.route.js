const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main.controller')

router.get('/', mainController.getIndex)
router.post('/add', mainController.addSupply)

module.exports = router