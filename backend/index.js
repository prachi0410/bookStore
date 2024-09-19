// const express = require('express')
// const dotenv = require('dotenv');

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

// console.log("MongoDB URI: ", process.env.MongoDBURI);
// console.log("Port: ", process.env.port);

const port = process.env.port || 4001;
const URI = process.env.MongoDBURI;

try {
  mongoose.connect(URI, {
      useNewUrlParser: true,    // Corrected
      useUnifiedTopology: true, // Corrected
  }).then(() => {
      console.log('Connected to MongoDB Atlas successfully');
  }).catch((error) => {
      console.log('Error connecting to MongoDB Atlas: ', error);
  });
} catch (error) {
  console.log('Error in MongoDB connection setup: ', error);  
}

app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

