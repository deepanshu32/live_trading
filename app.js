const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const debug = require('debug')('trades:server');
const cors = require("cors");
const http = require('http');
const socketio = require('socket.io');
const mongoose = require("mongoose");
const { fork } = require('child_process');

//connect to database
mongoose.connect("mongodb://localhost:27017/apptware", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
mongoose.connection.on("error", err => {
  console.log(chalk.red(err));
});

const indexRouter = require('./routes/index');

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/frontend/build')));

const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*',
  }
});

let stocks;
const worker1 = fork('./workers/worker1.js'); // Create Worker 1
const worker2 = fork('./workers/worker2.js'); // Create Worler 2

// API to reset market
app.get('/reset', (req, res) => {
    try{
        worker1.send("Reset Market");
        worker2.send("Reset Market");
        io.emit(
            'reset_market'
        );
        res.json({
            success: true
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false
        });
    }
});

app.use('/', indexRouter);

// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
// });

// monitor connections from client
io.on('connection', socket => {
    socket.on('subscribe', (symbol) => {
        console.log(symbol);
        socket.join(symbol);
        console.log("subscribe");
    });
});

// events from worker 1
// On receiving stocks and trades from worker 1 send to worker 2 
worker1.on('message', (event) => {
    if(event.type == "stocks"){
        stocks = event.data;
        worker2.send({type: "stocks", data: stocks}); 
    }else if(event.type == "trade"){
        worker2.send({type: "trade", data: event.data});
    }
});

// events from worker 2
worker2.on('message', (event) => {
    if(event.type == "stocks"){
        worker1.send("Start trading"); // When both workers are ready with initial data structures as worker 1 to start trading
    }else if(event.type == "ohlc_notify"){
        console.log(event.data);
        console.log(event.performanceStatistics);
        io.to(event.data.symbol).emit(   // send ohlc data to client 
            'ohlc_notify',
            event.data
        );
        io.to(event.performanceStatistics.symbol).emit(   // send ohlc data to client 
            'performance_statistics',
            event.performanceStatistics
        );
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
