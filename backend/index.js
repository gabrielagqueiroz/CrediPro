import express from 'express';
import userRoutes from './routes/user.js'
import cors from 'cors';

const app = new express()

app.use(express.json())
app.use(cors())

app.use("/", userRoutes)

app.listen(8000)