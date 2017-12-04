var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next){
    
});

router.post('/logout', function(req, res, next){

});

/* GET auth listing. */
router.get('/', function(req, res, next) {
    res.redirect('/');
});

module.exports = router;