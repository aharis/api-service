import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import { dbConnect } from './config/database';
import routes from './routes';
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors(
    {
        origin: ['https://client-nej9.onrender.com']
    }
));

app.use(bodyParser.json());
app.use('/api', routes)

const port = process.env.PORT || 3001;
app.listen(port, async () => {
    dbConnect();
    console.log(`Server running on port ${port}`)
});