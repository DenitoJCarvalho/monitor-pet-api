import { response, request } from 'express';

import { connectDatabase as db } from '../database/mongodb';

import { Login } from '../models/LoginModel';

export const verifyLogin = async (request: any, response: any) => {
  const name: string = request.body.name;
  const password: string = request.body.password;
  return await response.json({
    name, password
  });
}

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