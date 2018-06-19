const config = require('../config/config');
const mongoose = require('mongoose');

const createConnection = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(`mongodb://127.0.0.1/${config.db}`);

  const db = mongoose.connection;
  db.once('open', () => {
    console.log('connected!');
  });
};

module.exports = createConnection;
