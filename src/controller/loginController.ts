import { response, request } from 'express';

import { connectDatabase as db } from '../database/mongodb';

import { Login } from '../models/LoginModel';

/**
 * 
 * @param request 
 * @param response
 * @returns todos os logins
 */
export const allLogins = async (request: any, response: any) => {
  try {
    await Login
      .find()
      .then(res => {
        return response
          .status(200)
          .json({ logins: res })
      }).catch();
  } catch (error) {
    return await response
      .status(404)
      .json({ message: `Não foi possível carregar a página ${error}` });
  }

}

/**
 * 
 * @param request 
 * @param response.
 * @prop name
 * @prop password
 * @prop email 
 * @returns Dados salvos com sucesso.
 */
export const newLogin = async (request: any, response: any) => {
  try {
    const name: string = await request.body.name;
    const password: string = await request.body.password;
    const email: string = await request.body.email;

    const login = new Login();
    login.name = name;
    login.password = password;
    login.email = email;

    await login
      .save()
      .then(res => { return response.status(200).json({ message: 'Dados salvos com sucesso. ' }) })
      .catch(error => { return response.status(400).json({ message: `Não foi possível salvar os dados ${error}` }) })

  } catch (error) {
    return await response.status(404).json({ message: 'Não foi possível acessar à página.' });
  }
}