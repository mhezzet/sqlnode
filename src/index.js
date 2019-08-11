import express from 'express';
import dbInit from './utils/database.js';


// creating express app instant
const app = express();

// database init connection
dbInit();

// app listening for request
app.listen(5000);
