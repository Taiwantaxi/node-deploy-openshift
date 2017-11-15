var app = require('express')();

const PORT = process.env.PORT || 3000

app.get('/', function(req, res){
  console.log(req.body);
  res.send('Hello World');
});

app.listen(PORT, function(){
  console.log(`App listening on port ${PORT}!`)
});


