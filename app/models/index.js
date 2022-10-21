const mongoose = require('mongoose');
const dbConfig = require('../config/db.config');

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.student = require('./stud.model')(mongoose);

module.exports = db;