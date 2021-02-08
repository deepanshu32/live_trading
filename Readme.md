# Instructions to setup project on Linux environment

install node.js

install community edition of MongoDB
start MongoDB server 

clone github repository using command: 
git clone https://github.com/deepanshu32/live_trading.git

import trades.json into mongodb using command:
mongoimport --host=127.0.0.1 -d apptware -c tradesnew --type json --file /path/to/trades.json

cd into trades folder
create a .env file by taking reference from sample.env

install all node modules by running command:
npm i

start server by running command:
node app.js

# Access live hosted project on

http://18.224.19.226:3000/

# System Design Criteria, methods, workers, data structures

System consists of three workers:
worker1 (worker1.js)
worker2 (worker2.js)
worker3 (app.js) //parent worker

worker1 reads trades from MongoDB database and sends trades to worker2 via parent worker

worker2 receives trades from worker1 via parent worker and computes OHLC bar data based on interval and sends to parent worker 

worker2 (parent worker) maintain client subscription list and emits OHLC data to clients

Arrays and JSON Objects Arrays are used as data structures for accomplishing the task




 