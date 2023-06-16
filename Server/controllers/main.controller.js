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
        type: req.body.type,
        added: Date.now()
      });
      res.json("Supply has been added!");
    } catch (err) {
      console.log(err);
    }
    console.log(req.body);
  },

  changeCount: async(req, res) => {
    try {
      const supToUp = await SupplyItem.findOneAndUpdate({_id: req.params.id}, {quantity: req.params.newCount}, { new: true})
      console.log(supToUp)
      res.json('Updated!')
    } catch (error) {
      console.log(error)
    }
  },

  getOneSupply: async(req,res) => {
    try {
      const supplyToEdit = await SupplyItem.findById(req.params.id)
      console.log(supplyToEdit)
    } catch (error) {
      console.log(error)
    }
  }
};
