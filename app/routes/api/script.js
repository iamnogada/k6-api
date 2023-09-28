var express = require('express');
var router = express.Router();
const scripts = require("../../../data/scripts.json")

router.get('/', function(req, res, next) {
    const data = {
        msg: "script api"
    }
    res.send(scripts)
});

module.exports = router;