const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! My name is Thinh')
})

router.get('/abc', (req, res) => {
    res.send('Nguyen Quoc Thinh')
})

router.get('/quocthinh', (req, res) => {
    // res.send('<h1>nguyen quoc thinh</h1>')
    res.render('sample.ejs')
})

module.exports = router;