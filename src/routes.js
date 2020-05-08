import { Router } from 'express';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
const routes = new Router();

routes.post('/register', UserController.store);
routes.get('/registers', UserController.index);
routes.put('/user/alter/:user_id', UserController.update);
routes.delete('/user/delete', UserController.destroy);

routes.post('/sessions', SessionController.store);

export default routes;