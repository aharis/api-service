import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import { dbConnect } from './config/database';
import routes from './routes';

const app = express();

app.use(cors(
    {
        origin: ['http://localhost:3000']
    }
));

app.use(bodyParser.json());
app.use('/api', routes)

const port = 3001
app.listen(port, async () => {
    dbConnect();
    console.log(`Server running on port ${port}`)
});