const express = require('express');
require('dotenv').config();
const { connectDB } = require('./config/DatabaseConnection');
const authRoute = require('./routes/authRoute');
const propertyRoute = require('./routes/propertyRoute'); 
const userRoute = require('./routes/userRoute');
const morgan = require('morgan');
const cors = require("cors");

const app = express();
connectDB();
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('/api/agent', authRoute);
app.use('/api/property', propertyRoute);
app.use('/api/user', userRoute);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).send({
      success: false,
      statusCode,
      message,
    });
  });

app.listen(process.env.PORT, ()=>{
    console.log(`server is live on ${process.env.PORT}`);
})