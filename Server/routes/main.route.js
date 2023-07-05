const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main.controller");
const path = require('path')

// router.get('/', mainController.getRoot)
// router.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "../../Client/dist/index.html"))
// );
router.get("/", mainController.getSupplies);
router.get("/edit/:id", mainController.getOneSupply);
router.get("/orders", mainController.getSuppliesForOrder);
router.get("/vendor/orders/:vendorName", mainController.getOrderByVendor);

router.post("/add", mainController.addSupply);

router.put("/count/:id/:newCount", mainController.changeCount);
router.put("/editSupply/:id", mainController.editSupply);

router.put("/order/:id/:newCount", mainController.changeOrderCount);
router.put("/orderadd/:id", mainController.addToOrderList);

module.exports = router;
