import mysql from 'mysql';
import AppError from '../errors/AppError';
import makeQuery from "../service/mySqlConnection";

// const logger = require('../utils/logger')('manufactureController');

const manufactureAction = async (req, res, next) => {
  try {
    const sql = 'select * from products';
    const data = await makeQuery(sql);

    res.json(data);
  } catch (err) {
    next(new AppError(err.message, 400));
  }
};

const getManufactureById = async (req, res, next) => {
  const { manufactureId } = req.params;

  try {
    const sql = 'select * from manufacturers where id = ?';
    const data = await makeQuery(sql, manufactureId);

    res.json(data);
  } catch (err) {
    next(new AppError(err.message, 400));
  }
};

const addNewManufacture = async (req, res) => {
  const { body } = req;
  const {
    title,
    description,
    picture
  } = body;

  const sql = `insert into manufacturers set ?`;


  try{
    const data = await makeQuery(sql, {
      title,
      description,
      picture
    });

    res.status(201).send(data);
  }catch(error){
    next(new AppError(error.message, 400));
  }
};


export { manufactureAction, getManufactureById, addNewManufacture };
