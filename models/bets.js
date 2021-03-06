var mongoose = require('mongoose');
const mass  = require('./stats');

// define the schema for our user model
var betsSchema = mongoose.Schema({
        name : {type: String,
                 unique: true
               },
        log : String
    });

module.exports = mongoose.model('Bet', betsSchema);
