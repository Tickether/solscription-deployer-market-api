import Contract from '../models/Contract.js';
import Owner from '../models/Owner.js';
import Withdrawal from "../models/Withdrawal.js";

export const deploySolscription = async (req, res, next) => {
    const ownerWallet = req.params.ownerwallet;
    const newContract = new Contract(req.body)

    try{
        const savedContract = await newContract.save();
        try {
            await Owner.findOneAndUpdate({ walletAddress: ownerWallet }, {
                $push: { owned: savedContract.contractAddress },
            });
            await Owner.findOneAndUpdate({ walletAddress: ownerWallet }, {
                $push: { created: savedContract.contractAddress },
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
    const ownerWallet = req.params.ownerwallet;
    const newOwnerWallet = req.params.newownerwallet
    try{
        const updateContract = await Contract.findOneAndUpdate(
            {contractAddress: req.params.contractaddress}, 
            {$set: req.body}, 
            {new: true}
        );
        await Owner.findOneAndUpdate({ walletAddress: ownerWallet }, {
            $pull: { owned: req.params.contractaddress },
        });
        await Owner.findOneAndUpdate({ walletAddress: newOwnerWallet }, {
            $push: { owned: req.params.contractaddress },
        });
        res.status(200).json(updateContract);
    } catch(err) {
        next(err);
    }
}// since change will only be owner find way to pull from user/owner 
//enter owner wallet find contract in array and remove


export const getSolscription = async (req, res, next) => {
    try{
        const contract = await Contract.findOne(
            {contractAddress: req.params.contractaddress}
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
        const contract = await Contract.findOne({contractAddress: req.params.contractaddress})
        const list = await Promise.all(
            contract.withdrawals.map(contractAddress =>{
                return Withdrawal.findOne({contractAddress: contractAddress});
            })
        );
        res.status(200).json(list)
    }catch(err){
        next(err);
    }
}
