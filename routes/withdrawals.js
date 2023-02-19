import express from 'express';
import { createWithdrawal } from '../controllers/Withdrawal.js';


const router = express.Router();

//CREATE
router.post('/:contractid', createWithdrawal);


export default router