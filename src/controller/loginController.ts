
import { Request, Response } from 'express';

import { Login } from '../models/LoginModel';

/**
 * 
 * @param request 
 * @param response
 * @returns { "logins": []}
 */
export const getLogins = async (request: Request, response: Response) => {
  try {
    await Login
      .find()
      .then(res => {
        return response.status(200).json({ logins: res })
      })
      .catch(error => {
        return response.status(400).json({ message: `Não há dados para ser carregados. - ${error}` })
      });
  } catch (error) {
    return await response.status(404).json({ message: `Não foi possível carregar a página ${error}` });
  }

}

/**
 * 
 * @param request 
 * @param response
 * @param id 
 * @returns { Id, name, password, email}
 */
export const getLoginOne = async (request: Request, response: Response) => {
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

export const getLoginAdmin = async (request: Request, response: Response) => {
  try {
    await Login.find({ profile: 'admin' })
      .then(res => {
        return response.status(200).json({ admins: res })
      })
      .catch(error => {
        return response.status(400).json({ message: `Admnistradores não encontrado. - ${error}` })
      });

  }
  catch (error) {
    await response.status(404).json({
      message: `Administradores não encontrados.`,
      error
    })
  }
}

export const getLoginUsers = async (request: Request, response: Response) => {
  try {
    await Login.find({ profile: 'user' })
      .then(res => {
        return response.status(200).json({ users: res })
      })
      .catch(error => {
        return response.status(400).json({ message: `Admnistradores não encontrado. - ${error}` })
      });

  }
  catch (error) {
    await response.status(404).json({
      message: `Administradores não encontrados.`,
      error
    })
  }
}

export const getLoginForNameAndPass = async (request: Request, response: Response) => {
  try {
    const email: string = await request.params.email;

    await Login
      .find({ email: email })
      .then(res => {
        return response.status(200).json({ user: res })
      })
      .catch(error => {
        return response.status(400).json({ message: `Login inválido`, error })
      })

  } catch (error) {
    return await response
      .status(404)
      .json({
        message: `Não foi possível encontrar login.`
      });
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
export const addLogin = async (request: Request, response: Response) => {
  try {
    const name: string = await request.body.name;
    const password: string = await request.body.password;
    const email: string = await request.body.email;
    const profile: string = await request.body.profile;
    const initalDate: string = Date.now().toString();

    const login = new Login();
    login.name = name;
    login.password = password;
    login.email = email;
    login.profile = profile;
    login.initialDate = initalDate;

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
export const updateLogin = async (request: Request, response: Response) => {
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

/**
 * @param request 
 * @param response 
 * @returns { message, res }
 */
export const deleteLogin = async (request: Request, response: Response) => {
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