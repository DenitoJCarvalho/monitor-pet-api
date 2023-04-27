import { Router } from 'express';

import { allLogins, newLogin, loginOne } from '../controller/loginController';

export const route = Router();

route.get('/login', allLogins);
route.get('/login/:id', loginOne);
route.post('/login/cadastrar', newLogin);
