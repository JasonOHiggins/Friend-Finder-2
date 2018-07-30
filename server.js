var express = require("express");          
var app = express();                        
var bodyParser = require("body-parser");    
var path = require("path");                 

var PORT = process.env.PORT || 8080;        

var friends = require('./app/data/friends.js');  


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(express.static("app/public"));              
app.use(bodyParser.text());                     
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
require("./app/routes/api-routes.js")(app);    
require("./app/routes/html-routes.js")(app);  

app.listen(PORT, function() {                       
  console.log("App listening on PORT: " + PORT);   
});                                                 