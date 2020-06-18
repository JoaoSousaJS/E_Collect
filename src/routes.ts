import express from 'express';
import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController'

const routes = express.Router();




routes.get('/items', ItemsController.index);


routes.post('/point', PointsController.create);
routes.get('/point', PointsController.index);
routes.get('/point/:id', PointsController.show);



export default routes;