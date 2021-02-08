const mongoose = require("mongoose");
require('mongoose-long')(mongoose);
const {Types: {Long}} = mongoose;
const Schema = mongoose.Schema;

const tradesSchema = new Schema({
    sym: {
        type: String,
        required: [true, "Stock name is required"]
    },
    P: {
        type: Number,
        required: [true, "Price of trade is required"]
    },
    Q: {
        type: Number,
        required: [true, "Quantity traded is required"]
    },
    TS2: {
        type: Long,
        required: [true, "Timestamp of trade"]
    }
},
  {
    timestamps: true
  }
);

const Trades = mongoose.model("Trades", tradesSchema);

module.exports = Trades;