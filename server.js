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

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', `http://localhost:4200`);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//Routes
app.use("/api", fishes);
app.listen(port, function(){
    console.log(`Running on http://${HOST}:${port}`);
});

