const express = require('express'); // commonjs
const path = require('path')
require('dotenv').config()
//import express from 'express'; // không dùng import được

const app = express(); // app express
const port = process.env.PORT || 8081; // port 
const hostname = process.env.HOST_NAME;
// config template engine
app.set('views', path.join(__dirname, 'views/'))
app.set('view engine', 'ejs')

// khai báo route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.send('Nguyen Quoc Thinh')
})

app.get('/quocthinh', (req, res) => {
    // res.send('<h1>nguyen quoc thinh</h1>')
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})