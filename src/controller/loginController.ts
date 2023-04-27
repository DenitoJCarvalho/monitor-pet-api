import { response, request } from 'express';
import { connectDatabase } from '../database/mongodb';

export const verifyLogin = async (request: any, response: any) => {
  const name: string = request.body.name;
  const password: string = request.body.password;
  return await response.json({
    name, password
  });
}

export const newLogin = async (request: any, response: any) => {
  try {

  } catch (error) {

  }
}