import mongoose from "mongoose";
const { Schema } = mongoose;

const SubscriptionSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        require: true
    },
    contractAddress: {
        type: String,
        required: true,
    },
    chain: {
        type: String,
        required: true
    },
    chainID: {
        type: Number,
        required: true
    },
    approved: {
        type: Boolean,
        default: false
    },
    marketAt:{
        type: Date,
        default:Date.now(),
    }
});

export default mongoose.model('Subscription', SubscriptionSchema)