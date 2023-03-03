import Subscription from "../models/Subscription";

export const createSubscription = async (req, res, next) => {

    const newSubscription = new Subscription(req.body)

    try{
        const savedSubscription = await newSubscription.save();
        res.status(200).json(savedSubscription)
    } catch(err) {
        next(err);
    }
};