import express from 'express';
import {getUsers, postUsers} from '../controllers/user.js'
import {getProducts, postProducts } from '../controllers/product.js';
import { postOrder } from '../controllers/order.js';

const router = express.Router()

router.get("/", getUsers)

router.post("/cadastro/cliente", postUsers)

router.get("/cadastro/pedido/:userId", getProducts)

router.post("/cadastro/produtos", postProducts)

router.post("/cadastro/pedido/:userId", postOrder)

export default router
