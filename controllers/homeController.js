import AppError from '../errors/AppError';
import makeQuery from '../service/MysqlConnection';

const userAction = async (req, res, next) => {
  try {
    const sql = 'select * from users';
    const data = await makeQuery(sql);

    res.json(data);
  } catch (err) {
    next(new AppError(err.message, 400));
  }
};

const getUserById = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const sql = 'select * from users where id = ?';
    const data = await makeQuery(sql, userId);

    res.json(data);
  } catch (err) {
    next(new AppError(err.message, 400));
  }
};

const addNewUser = async (req, res) => {
  const { body } = req;
  const {
      first_name,
      last_name,
      password,
      email,
      is_active,
      image
  } = body;

  const sql = `insert into users set ?`;


  try{
    const data = await makeQuery(sql, {
      first_name,
      last_name,
      password,
      email,
      is_active,
      image
    });

    res.status(201).send(data);
  }catch(error){
    next(new AppError(error.message, 400));
  }
};

export { userAction, getUserById, addNewUser };
