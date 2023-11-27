
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import productsRoutes from './routes/products.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/products', productsRoutes);

const CONNECTION_URL = 'mongodb+srv://musyonchez:ukuruM20@pharmacy.afxy7cz.mongodb.net/sun_shine?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

