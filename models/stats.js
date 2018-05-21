var mongoose = require('mongoose');


// define the schema for our user model
var userSchema = mongoose.Schema({
        Drowings : Number,
        counter : Number,
        ladder : {},
        log: String
    });


module.exports = mongoose.model('Stat', userSchema);
