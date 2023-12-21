import express from 'express';
import {getUsers, postUsers} from '../controllers/user.js'
import {postProducts } from '../controllers/product.js';
import { postOrder } from '../controllers/order.js';

const router = express.Router()

router.get("/", getUsers)

router.post("/cadastro", postUsers)

router.post("/produtos", postProducts)

router.post("/cadastro/pedido/:userId", postOrder)

export default router
