import express from 'express';
import { router } from './routes';
import cors from 'cors';


const allowedOrigins = ['http://localhost:5173'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
const app = express();
app.use(cors(options));
app.use(express.json());
app.use(router)



app.listen(3334, ()=>console.log('Welcome to Zanarkand !'));