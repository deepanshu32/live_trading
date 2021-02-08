const config = require("../config");

let stocks;
let initialOHLCData;
let latest_bar_num = 0;
let ohlc = {}; 
let initialPerformanceData;
let performance = {};
let ohlcInterval;

// receive trade from master process
process.on('message', async (event) => {
    try{
        if(event.type == "stocks"){     // Create initial data structures on receiving stocks 
            stocks = event.data;
            stocks.forEach(stock => {
                ohlc[stock] = {
                    open: 0,
                    high: 0,
                    low: 0,
                    close: 0,
                    volume: 0
                }
                performance[stock] = {
                    symbol: stock,
                    firstOpen: 0,
                    totalTradeReturns: 0,
                    latestBarReturns: 0
                }
            });
            initialOHLCData = ohlc;
            initialPerformanceData = performance;
            process.send({type: "stocks", message: "ready"});
            ohlcInterval = setInterval(() => {    // Send OHLC data to worker 3 on specified interval
                latest_bar_num++;
                stocks.forEach(stock => {
                    process.send({
                        type: "ohlc_notify",
                        data: {
                            "event": "ohlc_notify", "symbol": stock, "bar_num": latest_bar_num,
                            "open": ohlc[stock]["open"],
                            "high": ohlc[stock]["high"],
                            "low": ohlc[stock]["low"],
                            "close": ohlc[stock]["close"],
                            "volume": ohlc[stock]["volume"]
                        },
                        performanceStatistics: performance[stock]
                    });
                });
                ohlc = initialOHLCData;
            }, config.INTERVAL);
        }else if(event.type == "trade"){      //compute OHLC data on receiving trade
            ohlc[event.data.sym]["volume"] += event.data.Q;
            if(event.data.P > ohlc[event.data.sym]["high"] || ohlc[event.data.sym]["high"] == 0){
                ohlc[event.data.sym]["high"] = event.data.P;
            }
            if(event.data.P < ohlc[event.data.sym]["low"] || ohlc[event.data.sym]["low"] == 0){
                ohlc[event.data.sym]["low"] = event.data.P;
            }
            if(ohlc[event.data.sym]["open"] == 0){
                ohlc[event.data.sym]["open"] = event.data.P;
            }
            ohlc[event.data.sym]["close"] = event.data.P;

            //Calculate performance statistics
            if(performance[event.data.sym]["firstOpen"] == 0){
                performance[event.data.sym]["firstOpen"] = event.data.P
            }

            performance[event.data.sym]["totalTradeReturns"] = ((ohlc[event.data.sym]["close"] - performance[event.data.sym]["firstOpen"])/performance[event.data.sym]["firstOpen"])*100;
            performance[event.data.sym]["latestBarReturns"] = ((ohlc[event.data.sym]["close"] - ohlc[event.data.sym]["open"])/ohlc[event.data.sym]["open"])*100;

        }else if(event == "Reset Market"){     // Start computing data from bar 1 on market reset
            latest_bar_num = 0;
            ohlc = initialOHLCData;
            performance = initialPerformanceData;
            clearInterval(ohlcInterval);
            ohlcInterval = setInterval(() => {
                latest_bar_num++;
                stocks.forEach(stock => {
                    process.send({
                        type: "ohlc_notify",
                        data: {
                            "event": "ohlc_notify", "symbol": stock, "bar_num": latest_bar_num,
                            "open": ohlc[stock]["open"],
                            "high": ohlc[stock]["high"],
                            "low": ohlc[stock]["low"],
                            "close": ohlc[stock]["close"],
                            "volume": ohlc[stock]["volume"]
                        },
                        performanceStatistics: performance[stock]
                    });
                });
                ohlc = initialOHLCData;
            }, config.INTERVAL);
        }
    }catch(err){
        console.log(err);
    }
});