const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const clientErrorHandler = require('./middlewares/client-error-handler');
const logErrorHanlder = require('./middlewares/log-error-handler');
const appConfig = require('./../configs/app.config');

const apiRouter = require('./routes');

let app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

// Passport configuration
require('./auth/passport');

app.use(morgan('dev'));

app.use('/api', apiRouter);

app.use(logErrorHanlder);
app.use(clientErrorHandler);

const start = () => (
  new Promise((resolve, reject) => {
    app.listen(appConfig.port, () => {
      console.log('App listenning on port', appConfig.port);
      resolve();
    }).on('error', reject);
  })
);

module.exports = {
  start,
  app
};
