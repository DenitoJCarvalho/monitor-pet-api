import { Router } from 'express';

import { verifyLogin, newLogin } from '../controller/loginController';

export const route = Router();

route.get('/login', verifyLogin);
route.post('/login/cadastrar', newLogin);
