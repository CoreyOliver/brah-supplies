const SupplyItem = require("../models/SupplyItem.model");
const path = require('path')

module.exports = {
  // getRoot: async (req, res) => {
  //   try { 
  //     res.sendFile(path.join(__dirname, "../../Client/public", "index.html"))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // },
  getSupplies: async (req, res) => {
    try {
      const dataAgg = await SupplyItem.aggregate().sort({
        SKU: "asc",
      });
      res.json(dataAgg);
    } catch (err) {
      console.log(err);
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
        added: Date.now(),
        minLevel: req.body.minLevel,
        ordQty: 0,
      });
      res.json("Supply has been added!");
    } catch (err) {
      console.log(err);
    }
    console.log(req.body);
  },

  changeCount: async (req, res) => {
    try {
      const supToUp = await SupplyItem.findOneAndUpdate(
        { _id: req.params.id },
        { quantity: Number(req.params.newCount) },
        { new: true }
      );
      console.log(req.params, supToUp);
      res.json("Updated!");
    } catch (error) {
      console.log(error);
    }
  },

  getOneSupply: async (req, res) => {
    try {
      const supplyToEdit = await SupplyItem.findById(req.params.id);
      res.json(supplyToEdit);
    } catch (error) {
      console.log(error);
    }
  },

  editSupply: async (req, res) => {
    try {
      const supToUp = await SupplyItem.findByIdAndUpdate(req.params.id, {
        SKU: req.body.SKU,
        vendor: req.body.vendor,
        price: req.body.price,
        type: req.body.type,
        unitCount: req.body.unitCount,
        quantity: req.body.quantity,
        active: req.body.active,
        minLevel: req.body.minLevel,
      });
      res.json("res.body");
    } catch (error) {
      res.json(error);
    }
  },
  getSuppliesForOrder: async (req, res) => {
    try {
      const data = await SupplyItem.aggregate([
        {
          $match: {
            ordQty: { $not: { $eq: 0 } },
          },
        },
        {
          $sort: {
            vendor: 1,
          },
        },
      ]);
      res.json(data);
      // console.log(data, "get Supplies");
    } catch (error) {
      console.log(error);
    }
  },
  changeOrderCount: async (req, res) => {
    try {
      const supToUp = await SupplyItem.findOneAndUpdate(
        { _id: req.params.id },
        {
          ordQty: Number(req.params.newCount),
        },
        { new: true }
      );
      console.log(req.params, supToUp);
      res.json("Updated!");
    } catch (error) {
      console.log(error);
    }
  },
  addToOrderList: async (req, res) => {
    try {
      console.log(req.params.id);
      const itemToAdd = await SupplyItem.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            ordQty: 1,
          },
        },
        {
          new: true,
        }
      );
      res.json(itemToAdd);
    } catch (error) {
      console.log(error);
    }
  },
  getOrderByVendor: async (req, res) => {
    try {
      const data = await SupplyItem.aggregate([
        {
          $match: {
            vendor: req.params.vendorName,
            ordQty: { $not: { $eq: 0 } },
          },
        },
        {
          $sort: {
            vendor: 1,
          },
        },
      ]);
      console.log(req.params.vendorName)
      res.json(data);
    } catch (error) {
      console.log(error)
    }
  }
};
