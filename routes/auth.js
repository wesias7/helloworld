var express = require('express');
var router = express.Router();

router.get('/jwt/create', function(req, res, next){
    var jwt = require('jsonwebtoken');
    var secret = "wesias7";
    var payload = { email_address : "wesias7@gmail.com" };
    jwt.sign(payload, secret, { algorithm : 'HS256' }, function(err, token){
        jwt.verify(token, secret, function(err, decoded){
            console.log(decoded);
            res.send(decoded);
        })
    });
});

/* GET auth listing. */
router.get('/', function(req, res, next) {
    res.redirect('/');
});

router.post('/login', function(req, res, next){
    
});

router.post('/logout', function(req, res, next){

});

module.exports = router;