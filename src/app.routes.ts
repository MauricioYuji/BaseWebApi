import { Router } from 'express';
import authController from './controllers/auth.controller';
import TesteController from './controllers/teste.controller';
import middleware from './middlewares/middleware';

const routes = Router();

routes.post('/login', authController.login);
routes.get('/teste', middleware.checkToken, TesteController.show);
routes.post('/teste/add', middleware.checkToken, TesteController.create);
routes.put('/teste/edit/:id', middleware.checkToken, TesteController.update);
routes.delete('/teste/delete/:id', middleware.checkToken, TesteController.delete);

export default routes;