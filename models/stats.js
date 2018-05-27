var mongoose = require('mongoose');


// define the schema for our user model
var userSchema = mongoose.Schema({
        Drowing : Number,
        counter : Number,
        ladder : {},
        log: {type: String,
              unique: true
               }
    });


module.exports = mongoose.model('Stat', userSchema);
