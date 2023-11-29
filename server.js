
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import productsRoutes from './routes/products.js';
import usersRoutes from './routes/users.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

const CONNECTION_URL = 'mongodb+srv://musyonchez:ukuruM20@pharmacy.afxy7cz.mongodb.net/sun_shine?retryWrites=true&w=majority';
const PORT = 8080;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

