import mongoose from "mongoose";
const { Schema } = mongoose;

const OwnerSchema = new mongoose.Schema({
    walletAddress: {
        type: String,
        unique: true
    },
    username: {
        type: String,
        unique: true
    },
    owned: {
        type: [String]
    },
    created: {
        type: [String]
    }
});

export default mongoose.model('Owner', OwnerSchema)