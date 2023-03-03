import Contract from '../models/Contract.js';
import Owner from '../models/Owner.js';

export const createOwner = async (req, res, next) => {

    const newOwner = new Owner(req.body)

    try{
        const savedOwner = await newOwner.save();
        res.status(200).json(savedOwner)
    } catch(err) {
        next(err);
    }
};

export const updateOwner = async (req, res, next) => {
    try{
        const updateOwner = await Owner.findOneAndUpdate(
            {walletAddress: req.params.ownerwallet}, 
            {$set: req.body}, 
            {new: true}
        );
        res.status(200).json(updateOwner);
    } catch(err) {
        next(err);
    }
}


export const getOwner = async (req, res, next) => {
    try{
        const owner = await Owner.findOne(
            {walletAddress: req.params.ownerwallet}
        );
        res.status(200).json(owner);
    } catch(err) {
        next(err);
    }
}

export const getOwners = async (req, res, next) => {
    try{
        const owner = await Owner.find();
        res.status(200).json(owner);
    } catch(err) {
        next(err);
    }
}

export const getOwnerSolscriptions = async (req, res, next) =>{
    
    try{
        const owner = await Owner.findOne({walletAddress: req.params.ownerwallet})
        const list = await Promise.all(            
            owner.owned.map(contractaddress=>{
                return Contract.findOne({contractAddress: contractaddress});
            })
        );
        res.status(200).json(list)
    }catch(err){
        next(err);
    }
}