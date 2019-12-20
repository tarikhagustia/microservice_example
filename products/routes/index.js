var express = require('express');
var router = express.Router();
let Product = require("../models/Product"); 
let config = require("../config/keys")






/**
 * The Middleware
 */

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/seed', function (req, res, next) {
  console.log(config.jwtSecret)
  let token = req.headers['Authorization']; // Express headers are auto converted to lowercase
  if(token == undefined){
    res.status(403).json({
      message: "Please provide token",
      status_code: 403
    })
  }else{
    if (token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    }

    
    if (token) {
      jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
          res.status(403).json({
            message: "Invalid token",
            status_code: 403
          })
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      res.status(403).json({
        message: "Please provide token",
        status_code: 403
      })
    }
  }
  
})
router.get('/seed', function(req, res, next) {
  let data = [];
  let length = 100; // user defined length

  for(let i = 0; i < length; i++) {
     new Product({
       name: "Product name " + i,
       price: 15000
     }).save().then(() => console.log("Success"))
  }
  res.send(`Seeding ${length} complete`)
});
/**
 * Get Products list
 */
router.get('/', function(req, res, next) {
  Product.find({}, function(err, results) {
    res.send(results)
  })
});


module.exports = router;
