import { response, request } from 'express';

import { connectDatabase as db } from '../database/mongodb';

import { Login } from '../models/LoginModel';

/**
 * 
 * @param request 
 * @param response
 * @returns { "logins": []}
 */
export const getLogins = async (request: any, response: any) => {
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
 * @param response
 * @param id 
 * @returns { Id, name, password, email}
 */
export const loginOne = async (request: any, response: any) => {
  try {
    await Login
      .findOne({ _id: request.params.id })
      .then(res => {
        return response.status(200).json(res);
      }).catch(error => {
        return response.status(400).json({
          message: 'Login não encontrado.',
          error
        })
      });
  } catch (error) {
    return await response.status(404).json({ message: 'Não foi possível encontrar os dados.' });
  }
}

/**
 * 
 * @param request 
 * @param response.
 * @prop name
 * @prop password
 * @prop email 
 * @returns {name, password, email}
 */
export const addLogin = async (request: any, response: any) => {
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
      .then(res => {
        return response
          .status(201)
          .json({
            message: 'Dados salvos com sucesso. ',
            res
          })
      })
      .catch(error => {
        return response
          .status(400)
          .json({
            message: `Não foi possível salvar os dados ${error}`
          })
      })

  } catch (error) {
    return await response.status(404).json({ message: 'Não foi possível acessar à página.' });
  }
}

/**
 * 
 * @param request 
 * @param response 
 * @returns {
 * name, password, email}
 */
export const updateLogin = async (request: any, response: any) => {
  try {
    await Login
      .findByIdAndUpdate(request.params.id, {
        name: request.body.name,
        password: request.body.password,
        email: request.body.email
      })
      .then(res => {
        return response
          .status(200)
          .json({
            message: 'Dados atualizados com sucesso.',
            res
          })
      }).catch(error => {
        return response
          .status(400)
          .json({
            message: `Erro ao atualizar dados. ${error}`
          })
      })

  } catch (error) {
    return response
      .status(404)
      .json({
        message: 'Não foi possível encontrar a página.'
      });
  }
}

export const deleteLogin = async (request: any, response: any) => {
  try {
    await Login
      .findByIdAndDelete(request.params.id)
      .then(res => {
        return response
          .status(200)
          .json({
            message: `Login excluído com sucesso.`,
            res
          })
      })
  } catch (error) {
    return await response
      .status(404)
      .json({
        message: `Não foi possível carregar os dados para deletar`
      })
  }
}