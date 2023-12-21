import express from 'express';
import mainRouter from './routes/routes.js';

import cors from 'cors';

const app = new express()

app.use(express.json())
app.use(cors())

app.use("/", mainRouter)

app.listen(8000)

