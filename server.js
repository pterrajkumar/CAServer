var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var fishes = require("./routes/aquariumfishes");
var app = express();
var port = 3000;
const HOST = '0.0.0.0';


//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Routes
app.use("/api", fishes);
app.listen(port, function(){
    console.log(`Running on http://${HOST}:${port}`);
});

