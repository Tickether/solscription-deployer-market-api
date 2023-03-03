import Membership from "../models/Membership";

export const createMembership = async (req, res, next) => {

    const newMembership = new Membership(req.body)

    try{
        const savedMembership = await newMembership.save();
        res.status(200).json(savedMembership)
    } catch(err) {
        next(err);
    }
};