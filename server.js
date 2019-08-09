import express from 'express';
import bodyParser from 'body-parser';
import './utils/dotenv';
import fileUpload from 'express-fileupload';
import healthCheck from './routes/healthCheck';
import HomeRoute from './routes/homeRoute';
import CategoryRoute from './routes/categoryRoute';
import CommentRoute from './routes/commentRoute';
import ManufacturerRoute from './routes/manufactureRoute';
import OrderRoute from './routes/orderRoute';
import ProductRoute from './routes/productRoute';
import UserRoute from './routes/userRoute';
import FileRoute from './routes/fileRoute';
import defaultErrorHandler from './middlewares/defaultErrorHandler';

const app = express();

app.use(
  fileUpload({
    createParentPath: true,
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/public`));
app.use('/files', FileRoute);

app.use(`/api/v${process.env.API_VERSION}`, healthCheck);
app.use('/', HomeRoute);
app.use('/categories', CategoryRoute);
app.use('/comments', CommentRoute);
app.use('/manufacturers', ManufacturerRoute);
app.use('/orders', OrderRoute);
app.use('/products', ProductRoute);
app.use('/users', UserRoute);

app.use(defaultErrorHandler);

app.listen(process.env.APP_PORT, 'localhost', () => {
  console.log(
    'info',
    `App is running at http://localhost:${process.env.APP_PORT} in ${app.get('env')} mode.`,
  );
});

module.exports = app;
