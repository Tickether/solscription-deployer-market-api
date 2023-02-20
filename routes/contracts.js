import express from 'express';
import { deploySolscription, getSolscription, getSolscriptions, getSolscriptionWithdrawals, updateSolscription } from '../controllers/contract.js';


const router = express.Router();

//CREATE
router.post('/:owneraddress', deploySolscription);

//UPDATE
router.put('/:ownerwallet', updateSolscription);


//GET
router.get('/:contractaddress', getSolscription);

//GET ALL
router.get('/', getSolscriptions);


router.get('/withdrawals/:contractaddress', getSolscriptionWithdrawals)

export default router