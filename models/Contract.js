import mongoose from "mongoose";
const { Schema } = mongoose;

const ContractSchema = new mongoose.Schema({
    creator: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    chain: {
        type: String,
        required: true
    },
    deployTxn: {
        type: String,
        required: true
    },
    contractAddress: {
        type: String,
    },
    subs: {
        type: [String]
    },
    withdrawals: {
        type: [String],
    },
}, { timestamps: true } );

export default mongoose.model('Contract', ContractSchema)