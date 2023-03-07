import mongoose from "mongoose";
const { Schema } = mongoose;

const MerchantSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    profile: {
        type: String,
        unique: true
    },
    cover: {
        type: String,
        unique: true
    },
    category: {
        type: String,
        unique: true
    },
    twitter: {
        type: String,
        unique: true
    },
    discord: {
        type: String,
        unique: true
    },
    subscriptions: {
        type: [String]
    }
});

export default mongoose.model('Merchant', MerchantSchema)