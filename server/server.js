const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const cookieParser = require('cookie-parser');

//import db connection
const connectDB = require('./config/db');
connectDB();


//import routes files
const clients = require('./routes/clients.routes');
const authRoute = require('./routes/authRoutes');


//import logger
//const logger = require('./middleware/logger');

//load env variables
dotenv.config({path:'./config/config.env'});

const app = express();

//application middlewares
//app.use(logger);
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(cookieParser());

// Mount routers
app.use('/api/v1/clients', clients)
app.use('/api/v1/auth', authRoute)

//error handler
app.use(errorHandler);



const PORT = process.env.PORT || 9000;

const server = app.listen(
   PORT, 
   console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

//handle unhandle promise rejections
process.on('unhandledRejection', (err , promise) => {
    console.log(`Error: ${err.message}`.red);
    //server.close and exit process
    server.close(() => process.exit(1)); 
})


