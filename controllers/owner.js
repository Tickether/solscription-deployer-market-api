import Owner from '../models/Owner';

export const updateOwner = async (req, res, next) => {
    try{
        const updateOwner = await Owner.findByIdAndUpdate(
            req.params.id, 
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
        const owner = await Owner.findById(
            req.params.id
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