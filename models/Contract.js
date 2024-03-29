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
    chainID: {
        type: Number,
        required: true
    },
    deployTxn: {
        type: String,
        required: true,
        unique: true 
    },
    contractAddress: {
        type: String,
        required: true,
        unique: true
    },
    market:{
        type: Boolean,
        default: false
    },
    memberships: {
        type: [String]
    },
    subscribed: {
        type: [String]
    },
    withdrawals: {
        type: [String],
    },
}, { timestamps: true } );

export default mongoose.model('Contract', ContractSchema)