const SupplyItem = require("../models/SupplyItem.model");

module.exports = {
  getSupplies: async (req, res) => {
    try {
        const data = await SupplyItem.find()
        res.json(data)
    }catch(err) {
        console.log(err)
    }
  },

  addSupply: async (req, res) => {
    try {
      await SupplyItem.create({
        SKU: req.body.SKU,
        vendor: req.body.vendor,
        quantity: 0,
        active: true,
        unitCount: req.body.unitCount,
        price: req.body.price,
        added: Date.now()
      });
      console.log("Supply has been added!");
    } catch (err) {
      console.log(err);
    }
    console.log(req.body);
  },
};
