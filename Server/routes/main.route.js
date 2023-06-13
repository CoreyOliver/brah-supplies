const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main.controller')

router.get('/', mainController.getIndex)
router.post('/', mainController.addSupply)

module.exports = router