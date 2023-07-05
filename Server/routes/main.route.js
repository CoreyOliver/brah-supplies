const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main.controller')

// router.get('/', mainController.getRoot)
router.get('/getSupplies', mainController.getSupplies)
router.get('/edit/:id', mainController.getOneSupply)
router.get('/orders', mainController.getSuppliesForOrder)
router.get('/vendor/orders/:vendorName', mainController.getOrderByVendor)

router.post('/add', mainController.addSupply)


router.put('/count/:id/:newCount', mainController.changeCount)
router.put('/editSupply/:id', mainController.editSupply)

router.put('/order/:id/:newCount', mainController.changeOrderCount)
router.put('/orderadd/:id', mainController.addToOrderList)

module.exports = router