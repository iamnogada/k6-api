var express = require('express');
var router = express.Router();
const scripts = require("../../../data/scripts.json")
const pageSize = 20;

router.get('/', function(req, res, next) {
    const start = req.query.start|0;
    const end = req.query.end? req.query.end:20;
    if(start >= scripts.length){
        res.send({
            start: start,
            end: end,
            data: []
        })
        return
    }
    if(end > scripts.length){
        end = scripts.length;
    }
    const result = {
        start: start,
        end: end,
        data: scripts.slice(start, end)
    }
    console.log(result.data.length);
    res.send(result)
});

router.get('/:id', function(req, res, next) {
    const id = req.params.id|0;
    const result = scripts[id];
    res.send(result)
});

module.exports = router;