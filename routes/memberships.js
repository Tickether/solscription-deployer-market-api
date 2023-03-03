import express from 'express';
import { createMembership, getMembership, getMemberships, updateMembership } from '../controllers/membership.js';

const router = express.Router();

//CREATE
router.post('/', createMembership);

//UPDATE
router.put('/:memberstxn', updateMembership);


//GET
router.get('/:memberstxn', getMembership);

//GET ALL
router.get('/', getMemberships);




export default router