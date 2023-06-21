const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main.controller')

router.get('/', mainController.getSupplies)
router.get('/edit/:id', mainController.getOneSupply)
router.get('/orders', mainController.getSuppliesForOrder)

router.post('/add', mainController.addSupply)


router.put('/count/:id/:newCount', mainController.changeCount)
router.put('/editSupply/:id', mainController.editSupply)

module.exports = router