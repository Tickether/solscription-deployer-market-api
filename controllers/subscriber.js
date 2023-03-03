import Subscriber from "../models/Subscriber";

export const createSubscriber = async (req, res, next) => {

    const newSubscriber = new Subscriber(req.body)

    try{
        const savedSubscriber = await newSubscriber.save();
        res.status(200).json(savedSubscriber)
    } catch(err) {
        next(err);
    }
};