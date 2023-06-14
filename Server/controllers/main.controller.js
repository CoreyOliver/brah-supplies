const SupplyItem = require('../models/SupplyItem.model')

module.exports = {
    getIndex: (req,res)=>{
        res.json({"answer": "got em"})
    },
    addSupply: async (req, res) => {
        // try{
        //     await SupplyItem.create({SKU: req.body.SKUR, vendor: req.body.vendorR, quantity: 0, active: true, unitCount:req.body.unitCountR, price: req.body.priceR})
        //     console.log('Supply has been added!')
        //     res.redirect('/')
        // }catch(err){
        //     console.log(err)
        // }
        console.log(req)
    }
}