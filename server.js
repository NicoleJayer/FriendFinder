//require files
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");


//code for using express application
var app = express();
var PORT = process.env.PORT || 8100;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// code for using body parser in the application
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function(){
   console.log("Started our server and listening");
})
