import express from 'express';
import { deploySolscription, getSolscription, getSolscriptions, getSolscriptionWithdrawals, updateSolscription } from '../controllers/contract.js';


const router = express.Router();

//CREATE
router.post('/:ownerwallet', deploySolscription);

//UPDATE
router.put('/:contractaddress/:ownerwallet/:newownerwallet', updateSolscription);


//GET
router.get('/:contractaddress', getSolscription);

//GET ALL
router.get('/', getSolscriptions);


router.get('/withdrawals/:contractaddress', getSolscriptionWithdrawals)

export default router