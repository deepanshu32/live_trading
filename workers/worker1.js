const mongoose = require("mongoose");
const Trades = require("../models/trades");
let trades;
let tradeInterval;

// connect to database
mongoose.connect("mongodb://localhost:27017/apptware", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(async () => {
    trades = await Trades.find({}).sort({ "TS2": 1 });
    const stocks = [...new Set(trades.map(trade => trade.sym))];
    process.send({type: "stocks", data: stocks}); // send message to parent ready with stocks
}).catch(err => {
    console.log(err);
});
mongoose.connection.on("error", err => {
  console.log(chalk.red(err));
});

// receive message from master process
process.on('message', async (message) => {
    if(message == "Reset Market"){        // Reset trading and start trade from 0 bar
        clearInterval(tradeInterval);
        let i = 0;
        tradeInterval =  setInterval(() => {
            process.send({ type: "trade", data: trades[i]});
            i++;
            if(i == trades.length){
                clearInterval(tradeInterval);
            }
        }, 1000);
    }else if(message == "Start trading"){     // Start trading by sending trade data one by one
        try{
            let i = 0;
            tradeInterval =  setInterval(() => {
                process.send({ type: "trade", data: trades[i]});
                i++;
                if(i == trades.length){
                    clearInterval(tradeInterval);
                }
            }, 1000);
        }catch(err){
            console.log(err);
        }
    }
});