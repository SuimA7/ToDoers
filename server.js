var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/tasks.json', function(req, res) {
  console.log('GET:' + req );
  fs.readFile('./public/data/tasks.json', function(err, data) {
    console.log(err);
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.post('/tasks.json', function(req, res) {
  fs.readFile('./public/data/tasks.json', function(err, data) {
    var tasks = JSON.parse(data);
    tasks.push(req.body);
    fs.writeFile('./public/data/tasks.json', JSON.stringify(tasks, null, 4), function(err) {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(tasks);
    });
  });
});


app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});