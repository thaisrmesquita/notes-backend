import { Router } from 'express';
import UserController from './controllers/UserController';
const routes = new Router();

routes.post('/register', UserController.store);
routes.get('/registers', UserController.index);
routes.delete('/user/delete', UserController.destroy);
export default routes;