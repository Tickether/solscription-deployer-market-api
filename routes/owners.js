import express from 'express';
import { getOwner, getOwners, updateOwner } from '../controllers/owner.js';


const router = express.Router();


//UPDATE
router.put('/:id', updateOwner);


//GET
router.get('/:id', getOwner);

//GET ALL
router.get('/', getOwners);



export default router