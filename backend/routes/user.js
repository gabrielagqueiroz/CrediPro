import express from 'express';
import {getUsers, postUsers} from '../controllers/user.js'

const router = express.Router()

router.get("/", getUsers)

router.post("/cadastro", postUsers)

export default router