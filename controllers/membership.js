import Contract from "../models/Contract.js";
import Membership from "../models/Membership.js";
import Subscriber from "../models/Subscriber.js";

export const createMembership = async (req, res, next) => {

    const newMembership = new Membership(req.body)

    try{
        const savedMembership = await newMembership.save();
        try {
            await Subscriber.findOneAndUpdate({ walletAddress: savedContract.walletAddress }, {
                $push: { memberships: savedContract.membersTxn },
            });
            await Contract.findOneAndUpdate({ contractAddress: savedContract.contractAddress }, {
                $push: { memberships: savedContract.membersTxn },
            });
            
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedMembership)
    } catch(err) {
        next(err);
    }
};

export const updateMembership = async (req, res, next) => {
    try{
        const updateMembership = await Membership.findOneAndUpdate(
            {membersTxn: req.params.memberstxn}, 
            {$set: req.body}, 
            {new: true}
        );
        res.status(200).json(updateMembership);
    } catch(err) {
        next(err);
    }
}

export const getMembership = async (req, res, next) => {
    try{
        const membership = await Membership.findOne(
            {membersTxn: req.params.memberstxn}
        );
        res.status(200).json(membership);
    } catch(err) {
        next(err);
    }
}

export const getMemberships = async (req, res, next) => {
    try{
        const memberships = await Membership.find();
        res.status(200).json(memberships);
    } catch(err) {
        next(err);
    }
}