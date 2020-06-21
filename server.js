const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env'})

connectDB();

const transaction = require('./routes/transaction');

const app = express();

app.use(express.json())

app.use('/api/v1/transaction', transaction);


const PORT = process.env.PORT

app.listen(PORT, console.log(`Server is running on port ${PORT}`.blue.bold))