import Subscriber from "../models/Subscriber.js";

export const createSubscriber = async (req, res, next) => {

    const newSubscriber = new Subscriber(req.body)

    try{
        const savedSubscriber = await newSubscriber.save();
        res.status(200).json(savedSubscriber)
    } catch(err) {
        next(err);
    }
};

export const updateSubscriber = async (req, res, next) => {
    try{
        const updateSubscriber = await Subscriber.findOneAndUpdate(
            {walletAddress: req.params.ownerwallet}, 
            {$set: req.body}, 
            {new: true}
        );
        res.status(200).json(updateSubscriber);
    } catch(err) {
        next(err);
    }
}


export const getSubscriber = async (req, res, next) => {
    try{
        const subscriber = await Subscriber.findOne(
            {walletAddress: req.params.ownerwallet}
        );
        res.status(200).json(subscriber);
    } catch(err) {
        next(err);
    }
}

export const getSubscribers = async (req, res, next) => {
    try{
        const subscribers = await Subscriber.find();
        res.status(200).json(subscribers);
    } catch(err) {
        next(err);
    }
}