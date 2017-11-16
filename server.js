var app = require('express')();

const PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;
const IP = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', function(req, res){
  console.log(req.body);
  res.send('Hello World');
});

app.listen(PORT, IP, function(){
  console.log(`App listening on port ${IP} : ${PORT}!`)
});


