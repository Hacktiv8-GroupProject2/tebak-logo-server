'use strict'
require('dotenv').config()
const express = require('express');
const app = express()
const cors = require('cors');
const Routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const port = process.env.PORT || 3000


app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/', Routes)

app.use(errorHandler)

app.listen(port,()=>{
  console.log(`App running in http://localhost:${port}`);
})