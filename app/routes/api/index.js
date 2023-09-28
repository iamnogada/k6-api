var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json("{msg:'k8s api'}")
});

module.exports = router;