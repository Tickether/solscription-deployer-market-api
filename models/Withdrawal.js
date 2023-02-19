import mongoose from "mongoose";
const { Schema } = mongoose;

const WithdrawalSchema = new mongoose.Schema({
    contract: {
        type: Schema.ObjectId,
        ref: 'Contract',
        required: true,
    },
    currency: {
        type: String,
        required: true,
        enum: ['Stables', 'Native']
    },
    chain: {
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true,
    },
    txnHash: {
        type: String,
        required: true,
        unique: true
    },
    withdrawAt:{
        type: Date,
        default:Date.now(),
    }
});

export default mongoose.model('Withdrawal', WithdrawalSchema)