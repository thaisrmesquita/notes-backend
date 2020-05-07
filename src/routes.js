import { Router } from 'express';
import UserController from './controllers/UserController';
const routes = new Router();

routes.post('/register', UserController.store);

routes.get('/', (req,res)=>{
    return res.json({ok:true});
});

export default routes;