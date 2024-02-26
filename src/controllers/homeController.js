
const getHomePage = (req, res) => {
    res.send('Hello World! My name is Thinh')
}

const getABC = (req, res) => {
    res.send('Nguyen Quoc Thinh')
}

const getQuocThinh = (req, res) => {
    // res.send('<h1>nguyen quoc thinh</h1>')
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getABC,
    getQuocThinh
}