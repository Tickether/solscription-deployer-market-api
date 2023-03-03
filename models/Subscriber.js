import mongoose from "mongoose";
const { Schema } = mongoose;

const SubscriberSchema = new mongoose.Schema({
    
    walletAddress: {
        type: String,
        required: true
    },
    username: {
        type: String
    },
    bio: {
        type: String
    },
    memberships: {
        type: [String]
    },
    subscriberAt:{
        type: Date,
        default:Date.now(),
    }
});

export default mongoose.model('Subscriber', SubscriberSchema)