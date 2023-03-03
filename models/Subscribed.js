import mongoose from "mongoose";
const { Schema } = mongoose;

const SubscribedSchema = new mongoose.Schema({
    
    contractAddress: {
        type: String,
        required: true,
    },
    subsTxn: {
        type: String,
        require: true
    },
    chain: {
        type: String,
        required: true
    },
    chainID: {
        type: String,
        required: true
    },
    subscribedAt:{
        type: Date,
    }
});

export default mongoose.model('Subscribed', SubscribedSchema)