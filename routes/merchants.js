import express from 'express';
import { createMerchant, getMerchant, getMerchants, getMerchantSolscriptions, updateMerchant } from '../controllers/merchant.js';


const router = express.Router();

//CREATE
router.post('/', createMerchant);

//UPDATE
router.put('/:name', updateMerchant);


//GET
router.get('/:name', getMerchant);

//GET ALL
router.get('/', getMerchants);

router.get('/subscriptions/:name', getMerchantSolscriptions)



export default router