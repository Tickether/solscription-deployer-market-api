import Contract from '../models/Contract';
import Owner from '../models/Owner';
import Withdrawal from "../models/Withdrawal.js";

export const deploySolscription = async (req, res, next) => {
    const ownerId = req.params.ownerid;
    const newContract = new Contract(req.body)

    try{
        const savedContract = await newContract.save();
        try {
            await Owner.findByIdAndUpdate(ownerId, {
                $push: { owned: savedContract._id },
                $push: { created: savedContract._id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedContract)
    } catch(err) {
        next(err);
    }
}

export const updateSolscription = async (req, res, next) => {
    try{
        const updateContract = await Contract.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body}, 
            {new: true}
        );
        res.status(200).json(updateContract);
    } catch(err) {
        next(err);
    }
}


export const getSolscription = async (req, res, next) => {
    try{
        const contract = await Contract.findById(
            req.params.id
        );
        res.status(200).json(contract);
    } catch(err) {
        next(err);
    }
}

export const getSolscriptions = async (req, res, next) => {
    try{
        const contract = await Contract.find();
        res.status(200).json(contract);
    } catch(err) {
        next(err);
    }
}

export const getSolscriptionWithdrawals = async (req, res, next) =>{
    try{
        const contract = await Contract.findById(req.params.id)
        const list = await Promise.all(
            contract.withdrawals.map(withdrawal=>{
                return Withdrawal.findById(withdrawal);
            })
        );
        res.status(200).json(list)
    }catch(err){
        next(err);
    }
}
