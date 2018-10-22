var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var app = express(); 
var port = process.env.PORT || 3030;
var server = require('http').createServer(app); 
app.set("views", path.resolve(__dirname, "assets")); 
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/assets'));
var entries = [];
app.locals.entries = entries;
app.use(logger("dev")); 

app.use(bodyParser.urlencoded({ extended: false }));
// GETS
app.get("/", function (request, response) {
    response.sendFile(__dirname+"/assets/Home.html");
});
app.get("/home", function (request, response) {
    response.sendFile(__dirname+"/assets/Home.html");
});
app.get("/contact", function (request, response) {
    response.sendFile(__dirname+"/assets/Contact.html");
});

// Listen for an application request on port 8081
server.listen(port);