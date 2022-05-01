import express from "express";

import { getFlys, getSingleFly, createFly, deleteFly, getFlysNumber
        } from '../controllers/flys.js'

const router = express.Router()

router.get('/number', getFlysNumber)
router.get('/', getFlys)
router.get('/:fly_id', getSingleFly)
router.delete('/:fly_id', deleteFly)
router.post('/deploy', createFly)

export default router