import cors from 'cors'
import express from 'express';
import bodyParser from 'body-parser';

const corsOptions = {origin: 'http://localhost:3000'}

const app = express();
app.use(cors(corsOptions))

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

import voteRoutes from './routes/votes.js'
app.use('/votes', voteRoutes)

app.listen(3005, () => {
    console.log('backend server connected')
})