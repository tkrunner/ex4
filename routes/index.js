var express = require("express");
var router = express.Router();
var connect = require("../config/database");

/* GET home page. */
router.get("/", function(req, res, next) {
 res.render("index");
});

router.get("/create", function(req, res, next) {
 var query = "SELECT * FROM categories";
 connect.query(query, function(error, result) {
   console.log(result);
   res.render("create");
 });
});

router.get("/login", function(req, res, next) {
 res.render("login");
});

module.exports = router;


