var express = require('express');
var router = express.Router();
const Trades = require("../models/trades");

/* GET home page. */
router.get('/stocks', async (req, res, next) => {
  try{
    let trades = await Trades.find({}).limit(1000);
    const stocks = [...new Set(trades.map(trade => trade.sym))];
    res.json({
      success: true,
      stocks: stocks
    });
  }catch(err){
    console.log(err);
    res.status(500).json({
      success: false,
      stocks: []
    });
  }
});

module.exports = router;
