const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//need to improve this schema
const lottories = new Schema({
    "1": Number,
    "2": Number,
    "3": Number,
    "4": Number,
    "5": Number,
    number: {type: Number,
             unique: true
           }
});
/**
//  * @param {earningsModel} targetEarnin
//  */
// EarningsSchema.methods.transferTo = function (amount, targetEarnin) {
//   // this --
//     this.wallet -= amount;
//     this.save().then(
//       targetEarnin.wallet += amount;
//       return targetEarnin.
//     )
// }

const lotto = mongoose.model('Lottories', lottories);

module.exports = lotto;
