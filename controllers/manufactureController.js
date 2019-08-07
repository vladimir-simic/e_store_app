import mysql from 'mysql';
import AppError from '../errors/AppError';

const logger = require('../utils/logger')('manufactureController');

const manufactureAction = async (req, res, next) => {
  logger.log('info', `healthCheck: ${JSON.stringify(req.params)}`);
  try {
    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    connection.connect();

    const result = connection.query('SELECT * FROM manufacture', null, (error, result, fields) => {
      if (error) {
        console.log(error);
      }
      if (result) {
        res.json(result);
      }
    });
  } catch (error) {
    next(new AppError(err.message, 400));
  }
};

export default manufactureAction;
