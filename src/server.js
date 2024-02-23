require('dotenv').config()
const express = require('express'); // commonjs


const configViewEngine = require('./config/viewEngine')

const webRouters = require('./routes/web')
//import express from 'express'; // không dùng import được

const app = express(); // app express
const port = process.env.PORT || 8081; // port 
const hostname = process.env.HOST_NAME;
// config template engine

configViewEngine(app);


// khai báo route

app.use('/', webRouters);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})