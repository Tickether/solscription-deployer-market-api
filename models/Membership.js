import mongoose from "mongoose";
const { Schema } = mongoose;

const MembershipSchema = new mongoose.Schema({
    
    membersTxn: {
        type: String,
        require: true,
        unique: true
    },
    walletAddress: {
        type: String,
        required: true
    },
    contractAddress: {
        type: String,
        required: true,
    },
    membersToken: {
        type: Number,
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
    subscribed: {
        type: [String]
    },
    membersAt:{
        type: Date,
    }
});

export default mongoose.model('Membership', MembershipSchema)