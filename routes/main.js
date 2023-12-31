__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})
router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/docs.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'DUDA-BOT',
            namaowner: 'ALIZIN',
            instagram: 'hackzinhox',
            youtube : 'AlizinDev'
        }
    }
    res.json(config)
})

module.exports = router