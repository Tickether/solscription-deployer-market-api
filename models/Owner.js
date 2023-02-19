import mongoose from "mongoose";
const { Schema } = mongoose;

const OwnerSchema = new mongoose.Schema({
    walletAddress: {
        type: String,
        required: true,
        unique: true
    },
    owned: {
        type: [String]
    },
    created: {
        type: [String]
    },
});

export default mongoose.model('Owner', OwnerSchema)