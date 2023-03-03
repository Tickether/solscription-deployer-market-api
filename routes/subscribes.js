import express from 'express';
import { createSubscribed, getSubscribed, getSubscribes, updateSubscribed } from '../controllers/subscribed.js';


const router = express.Router();

//CREATE
router.post('/:memberstxn', createSubscribed);

//UPDATE
router.put('/:contractaddress/:ownerwallet/:newownerwallet', updateSubscribed);


//GET
router.get('/:contractaddress', getSubscribed);

//GET ALL
router.get('/', getSubscribes);



export default router