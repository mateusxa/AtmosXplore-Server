import express from "express";

import { getFlys, getSingleFly, createFly, deleteSingleFly } from '../controllers/flys.js'

const router = express.Router()

router.get('/', getFlys)
router.get('/:fly_id', getSingleFly)
router.delete('/:fly_id', deleteSingleFly)
router.post('/', createFly)

export default router