import { Router } from 'express';

import {
  getLogins, addLogin, getLoginOne, getLoginForNameAndPass, updateLogin, deleteLogin,
  getLoginAdmin, getLoginUsers
} from '../controller/loginController';

export const route = Router();

route.get('/login', getLogins);
route.get('/login/:id', getLoginOne);
route.get('/authentication/:email', getLoginForNameAndPass);
route.get('/admins', getLoginAdmin)
route.get('/users', getLoginUsers)
route.post('/login/cadastrar', addLogin);
route.put('/login/atualizar/:id', updateLogin);
route.delete('/login/deletar/:id', deleteLogin)