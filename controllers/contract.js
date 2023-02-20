import Contract from '../models/Contract';
import Owner from '../models/Owner';
import Withdrawal from "../models/Withdrawal.js";

export const deploySolscription = async (req, res, next) => {
    const ownerWallet = req.params.ownerwallet;
    const newContract = new Contract(req.body)

    try{
        const savedContract = await newContract.save();
        try {
            await Owner.findOneAndUpdate({walletAdress: ownerWallet}, {
                $push: { owned: savedContract.contractAddress },
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
    try{
        const updateContract = await Contract.findOneAndUpdate(
            {walletAdress: req.params.ownerwallet}, 
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
    // const ContractAddress = req.params.contractaddress;
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
