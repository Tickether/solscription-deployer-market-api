import express from 'express';
import { createSubscriber, getSubscriber, getSubscribers, updateSubscriber } from '../controllers/subscriber.js';


const router = express.Router();

//CREATE
router.post('/',  createSubscriber);

//UPDATE
router.put('/:ownerwallet', updateSubscriber);

//GET
router.get('/:ownerwallet', getSubscriber);

//GET ALL
router.get('/', getSubscribers);


export default router