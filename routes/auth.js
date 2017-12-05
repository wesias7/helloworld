var express = require('express');
var acl = require('express-acl');
var router = express.Router();

router.use(function(req, res){
    var authorization = req.headers['Authorization'] ? req.headers['Authorization'] : 'has not bearer tokens!';
    console.log('info %s %s', 'auth-router authroization', authorization);
});

router.get('/jwt/create', function(req, res, next){
    var jwt = require('jsonwebtoken');
    var secret = "wesias7";
    var payload = { email_address : "wesias7@gmail.com" };
    jwt.sign(payload, secret, { algorithm : 'HS256' }, function(err, token){
        console.log(token);
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