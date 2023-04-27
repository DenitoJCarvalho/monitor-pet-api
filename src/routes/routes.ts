import { Router } from 'express';

import { allLogins, newLogin } from '../controller/loginController';

export const route = Router();

route.get('/login', allLogins);
route.post('/login/cadastrar', newLogin);
