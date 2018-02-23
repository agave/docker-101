'use strict';

const express = require('express');
const controller = require('./controllers/greeter');
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/greeting', controller.sayHello);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => console.log('Server running!'));
