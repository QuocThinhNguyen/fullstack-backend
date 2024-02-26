const express = require('express');
const { getHomePage, getABC, getQuocThinh } = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomePage)



router.get('/abc', getABC)

router.get('/quocthinh', getQuocThinh)

module.exports = router;