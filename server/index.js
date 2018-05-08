const express = require('express');
const bodyParser=require('body-parser')

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));	
app.get('/users', function (req, res) {
  
  res.send({name:'hi'})
});

let port = 8000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
