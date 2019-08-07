import express from 'express';
import bodyParser from 'body-parser';
import './utils/dotenv';
import healthCheck from './routes/healthCheck';
import homeRoute from './routes/homeRoute';
import defaultErrorHandler from './middlewares/defaultErrorHandler';

const logger = require('./utils/logger')(process.env.APP_NAME);

console.log(process.env.USER_NAME);

const app = express(); // create an instance of our server
app.use(bodyParser.json()); // parsing a body for a json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(`/api/v${process.env.API_VERSION}`, healthCheck);
app.use('/', homeRoute);

app.use(defaultErrorHandler);

app.listen(process.env.APP_PORT, 'localhost', () => {
  logger.log(
    'info',
    `App is running at http://localhost:${process.env.APP_PORT} in ${app.get('env')} mode.`,
  );
});

module.exports = app;
