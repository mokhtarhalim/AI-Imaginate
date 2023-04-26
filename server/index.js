import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import imaginateRoutes from "./routes/imaginateRoutes.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/imaginate', imaginateRoutes);

app.get('/', async (req, res) => {
    res.send('Hello From halim');
})

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server started on 8080'))
    } catch (err) {
        console.log(err)
    }

}

startServer();