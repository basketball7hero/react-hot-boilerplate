process.env.NODE_ENV === 'development' ? module.exports = require('./webpack/configs/development') : false;
process.env.NODE_ENV === 'production' ? module.exports = require('./webpack/configs/production') : false;
