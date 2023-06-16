const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main.controller')

router.get('/', mainController.getSupplies)
router.get('/edit/:id', mainController.getOneSupply)

router.post('/add', mainController.addSupply)
router.put('/count/:id/:newCount', mainController.changeCount)

module.exports = router