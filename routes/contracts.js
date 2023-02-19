import express from 'express';
import { deploySolscription, getSolscription, getSolscriptions, getSolscriptionWithdrawals, updateSolscription } from '../controllers/contract.js';


const router = express.Router();

//CREATE
router.post('/:ownerid', deploySolscription);

//UPDATE
router.put('/:id', updateSolscription);


//GET
router.get('/:id', getSolscription);

//GET ALL
router.get('/', getSolscriptions);


router.get('/withdrawals/:id', getSolscriptionWithdrawals)

export default router