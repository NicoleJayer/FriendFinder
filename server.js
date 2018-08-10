//require files
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");


//code for using express application
var app = express();
var PORT = process.env.PORT;


// code for using body parser in the application
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());
