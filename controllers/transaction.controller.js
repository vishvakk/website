const Transaction = require('../models/Transaction');


exports.getTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transaction.length,
            data: transaction
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}


exports.createTransaction = async (req, res, next) => {
    try {
        const { name, amount } = req.body
        const newTransaction = await Transaction.create(req.body)
        return res.status(201).json({
            success:true,
            data: newTransaction
        })
    } catch (err) {
        console.log(err.message)
        // return res.status(500).json({
        //     success:false,
        //     error: 'Server error'
        // })
    }
}



exports.deleteTransaction = async (req, res, next) => {
    try {
        const trans = await Transaction.findById(req.params.id)
        if (!trans){
            return res.status(404).json({
                success:true,
                error: 'Not Found'
            })
        }
        await trans.remove()
        return res.status(204).json({
            success:true,
        })
    } catch (err) {
         return res.status(500).json({
            success:false,
            error: 'Server error'
        })
    }
}