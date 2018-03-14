var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");

var db = mongojs("mongodb://adminuser:Welcome1@ds161146.mlab.com:61146/sevensalaiessentials",["Fishes"]);

//Get all Fishes
router.get("/fishes", function(req, res, next){
    db.Fishes.find(function(err, fishes){
        if(err){
            res.send(err);
        }
        res.json(fishes);
    });
});

//Get Single Driver and emit track by end user to driver
router.get("/fishes/:id", function(req, res, next){
    db.Fishes.find({index:req.params.id}, function(err, fishes){
        if(err){
            res.send(err);
        }
        res.json(fishes);
    });
});
module.exports = router;