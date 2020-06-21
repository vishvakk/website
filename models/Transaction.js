const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter']
    },
    amount:{
        type: Number,
        required:[true, 'Please enter number']
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Transaction', TransactionSchema);