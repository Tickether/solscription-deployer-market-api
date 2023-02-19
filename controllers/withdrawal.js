import Withdrawal from "../models/Withdrawal.js";
import Contract from '../models/Contract';

export const createWithdrawal = async (req, res, next) => {
    const contractId = req.params.contractid;

    const newWithdrawal = new Withdrawal(req.body)

    try{
        const savedWithdrawal = await newWithdrawal.save();
        try {
            await Contract.findByIdAndUpdate(contractId, {
                $push: { withdrawals: newWithdrawal._id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedWithdrawal)
    } catch(err) {
        next(err);
    }
};