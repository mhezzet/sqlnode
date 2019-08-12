import express from 'express';
import router from './utils/router.js'
import globalMiddlewares from './utils/middlewares.js'
import { dbInit } from './utils/database.js';


// creating express app instant
const app = express();

// database init connection
dbInit();

// setup global middlewares
globalMiddlewares(app)

// setup router
router(app)

// app listening for request
app.listen(5000);
