var express = require('express'),
  app = express();


app.set('view engine', 'ejs');

app.get('/', function(req, res){
  // use res.render
  res.render('index', {name: "zoe"});
});


app.listen(3000, function () {
  console.log("Go to localhost:3000/");
});
