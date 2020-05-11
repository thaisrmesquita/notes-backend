import { Router } from 'express';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import NoteController from './controllers/NoteController';
import DashboardController from './controllers/DashboardController';

const routes = new Router();

routes.post('/register', UserController.store);
routes.get('/registers', UserController.index);
routes.put('/user/alter/:user_id', UserController.update);
routes.delete('/user/delete', UserController.destroy);

routes.post('/sessions', SessionController.store);

routes.post('/notes', NoteController.store);

routes.get('/dashboard', DashboardController.show);

export default routes;