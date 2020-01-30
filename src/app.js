const express = require('express');
const app = express();

const indexRoute = require('./routes/index-route');
const sendEmailRoute = require('./routes/send-email-route');

// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
app.use('/', indexRoute);
app.use('/email', sendEmailRoute);
module.exports = app;
