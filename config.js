const dotenv = require('dotenv');
dotenv.config();

const config = {
    PORT: process.env.PORT,
    INTERVAL: process.env.INTERVAL
};

module.exports = config;