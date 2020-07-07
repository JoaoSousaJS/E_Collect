import express from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

const routes = express.Router();
const upload = multer(multerConfig);

routes.get('/items', ItemsController.index);

routes.get('/point', PointsController.index);
routes.get('/point/:id', PointsController.show);

routes.post('/point', upload.single('image'), PointsController.create);

export default routes;
