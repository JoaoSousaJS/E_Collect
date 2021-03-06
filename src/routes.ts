import { celebrate, Joi } from 'celebrate';
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

routes.post(
  '/point',
  upload.single('image'),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required(),
        items: Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  PointsController.create
);

export default routes;
