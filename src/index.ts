import express from 'express';
import cors from 'cors';
import { dbConnect } from './config/database';

const app = express();

app.use(cors(
    {
        origin: ['http://localhost:3000']
    }
))

const port = 3001
app.listen(port, async () => {
    dbConnect();
    console.log(`Server running on port ${port}`)
});