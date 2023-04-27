import { Router } from 'express';

import { getLogins, addLogin, getLoginOne, updateLogin, deleteLogin } from '../controller/loginController';

export const route = Router();

route.get('/login', getLogins);
route.get('/login/:id', getLoginOne);
route.post('/login/cadastrar', addLogin);
route.put('/login/atualizar/:id', updateLogin);
route.delete('/login/deletar/:id', deleteLogin)