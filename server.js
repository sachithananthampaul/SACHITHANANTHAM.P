const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var n1 = Number(req.body.Num1);
  var n2 = Number(req.body.Num2);
  var n3 = n1/(n1*n2);
  res.send("The answer is : " + n3);
  console.log(req.body);
 
});

app.listen(3000,function(){
  console.log("Server has started on port 3000");
});
