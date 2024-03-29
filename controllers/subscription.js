import Merchant from "../models/Merchant.js";
import Subscription from "../models/Subscription.js";

export const createSubscription = async (req, res, next) => {
    const name = req.params.name;
    const newSubscription = new Subscription(req.body)

    try{
        const savedSubscription = await newSubscription.save();
        try {

            await Merchant.findOneAndUpdate({ name: name }, {
                $push: { subscriptions: savedContract.contractAddress },
            });
            
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedSubscription)
    } catch(err) {
        next(err);
    }
};

export const updateSubscription = async (req, res, next) => {
    try{
        const updateSubscription = await Subscription.findOneAndUpdate(
            {contractAddress: req.params.contractaddress}, 
            {$set: req.body}, 
            {new: true}
        );
        res.status(200).json(updateSubscription);
    } catch(err) {
        next(err);
    }
}

export const getSubscription = async (req, res, next) => {
    try{
        const subscription = await Subscription.findOne(
            {contractAddress: req.params.contractaddress}
        );
        res.status(200).json(subscription);
    } catch(err) {
        next(err);
    }
}

export const getSubscriptionsByName = async (req, res, next) => {
    try{
        const subscriptions = await Subscription.find({name: req.query.name});
        res.status(200).json(subscriptions);
    } catch(err) {
        next(err);
    }
}

