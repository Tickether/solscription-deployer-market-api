import Subscribed from "../models/Subscribed";

export const createSubscribed = async (req, res, next) => {

    const newSubscribed = new Subscribed(req.body)

    try{
        const savedSubscribed = await newSubscribed.save();
        res.status(200).json(savedSubscribed)
    } catch(err) {
        next(err);
    }
};