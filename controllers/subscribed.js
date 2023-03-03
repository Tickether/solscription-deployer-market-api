import Contract from "../models/Contract.js";
import Membership from "../models/Membership.js";
import Subscribed from "../models/Subscribed.js";

export const createSubscribed = async (req, res, next) => {

    const newSubscribed = new Subscribed(req.body)
    
    try{
        const savedSubscribed = await newSubscribed.save();
        try {
            await Membership.findOneAndUpdate({ membersTxn: req.params.memberstxn }, {
                $push: { subscribed: savedContract.subsTxn },
            });
            await Contract.findOneAndUpdate({ contractAddress: savedContract.contractAddress }, {
                $push: { subscribed: savedContract.subsTxn },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedSubscribed)
    } catch(err) {
        next(err);
    }
};

export const updateSubscribed = async (req, res, next) => {
    try{
        const updateSubscribed = await Subscribed.findOneAndUpdate(
            {contractAddress: req.params.contractaddress}, 
            {$set: req.body}, 
            {new: true}
        );
        res.status(200).json(updateSubscribed);
    } catch(err) {
        next(err);
    }
}

export const getSubscribed = async (req, res, next) => {
    try{
        const subscribed = await Subscribed.findOne(
            {contractAddress: req.params.contractaddress}
        );
        res.status(200).json(subscribed);
    } catch(err) {
        next(err);
    }
}

export const getSubscribes = async (req, res, next) => {
    try{
        const subscribes = await Subscribed.find();
        res.status(200).json(subscribes);
    } catch(err) {
        next(err);
    }
}

