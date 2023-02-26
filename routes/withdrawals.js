import express from 'express';
import { createWithdrawal } from '../controllers/withdrawal.js';


const router = express.Router();

//CREATE
router.post('/:contractid', createWithdrawal);


export default router