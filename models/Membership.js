import mongoose from "mongoose";
const { Schema } = mongoose;

const MembershipSchema = new mongoose.Schema({
    
    walletAddress: {
        type: String,
        required: true
    },
    contractAddress: {
        type: String,
        required: true,
    },
    membersTxn: {
        type: String,
        require: true
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
    membersAt:{
        type: Date,
    }
});

export default mongoose.model('Membership', MembershipSchema)