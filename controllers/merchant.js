import Merchant from "../models/Merchant.js";
import Subscription from "../models/Subscription.js";

export const createMerchant = async (req, res, next) => {

    const newMerchant = new Merchant(req.body)

    try{
        const savedMerchant = await newMerchant.save();
        res.status(200).json(savedMerchant)
    } catch(err) {
        next(err);
    }
};

export const updateMerchant = async (req, res, next) => {
    try{
        const updateMerchant = await Merchant.findOneAndUpdate(
            {name: req.params.name}, 
            {$set: req.body}, 
            {new: true}
        );
        res.status(200).json(updateMerchant);
    } catch(err) {
        next(err);
    }
}

export const getMerchant = async (req, res, next) => {
    try{
        const merchant = await Merchant.findOne(
            {name: req.params.name}
        );
        res.status(200).json(merchant);
    } catch(err) {
        next(err);
    }
}

export const getMerchants = async (req, res, next) => {
    try{
        const merchant = await Merchant.find();
        res.status(200).json(merchant);
    } catch(err) {
        next(err);
    }
}

export const getMerchantSolscriptions = async (req, res, next) =>{
    
    try{
        const merchant = await Merchant.findOne({name: req.params.name})
        const list = await Promise.all(            
            merchant.subscriptions.map(contractaddress=>{
                return Subscription.findOne({contractAddress: contractaddress});
            })
        );
        res.status(200).json(list)
    }catch(err){
        next(err);
    }
}