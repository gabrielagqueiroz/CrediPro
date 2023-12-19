import express from 'express';
import {getUsers, postUsers, postOrder} from '../controllers/user.js'

const router = express.Router()

router.get("/", getUsers)

router.post("/cadastro", postUsers)

router.post("/cadastro/pedido/:userId", postOrder)

export default router