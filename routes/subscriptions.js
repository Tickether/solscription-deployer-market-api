import express from 'express';
import { createSubscription, getSubscription, getSubscriptionsByName, updateSubscription } from '../controllers/subscription.js';

const router = express.Router();

//CREATE
router.post('/:name', createSubscription);

//UPDATE
router.put('/:contractaddress', updateSubscription);


//GET
router.get('/:contractaddress', getSubscription);

//GET ALL
router.get('/', getSubscriptionsByName);




export default router