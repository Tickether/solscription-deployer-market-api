import express from 'express';
import { createOwner, getOwner, getOwners, getOwnerSolscriptions, updateOwner } from '../controllers/owner.js';


const router = express.Router();

//CREATE
router.post('/', createOwner);

//UPDATE
router.put('/:ownerwallet', updateOwner);


//GET
router.get('/:ownerwallet', getOwner);

//GET ALL
router.get('/', getOwners);

router.get('/contracts/:ownerwallet', getOwnerSolscriptions)



export default router