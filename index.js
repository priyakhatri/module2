const express = require('express');
const app = express();
const controller1 = require('./controllers/controller1');
const controller2 = require('./controllers/controller2');

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/1', (req, res) => {
  controller1(req, res);
});

app.get('/2', (req, res) => {
  controller2(req, res);
});

app.locals.name  = require(__dirname + '/package.json').name;

module.exports = app;
