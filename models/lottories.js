const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//need to improve this schema
const lottories = new Schema({
    name: {
      type: String,
      unigue: true,
      required: true
    },
    currentDrowing : {
        type: Number,
        unique: true,
        required: true
    },
    drowing: {}
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
