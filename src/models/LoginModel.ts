import mongoose, { Schema } from 'mongoose';

import { ILogin } from '../interfaces/ILogin';


/**
 * @typeParam ILogin
 * @prop name
 * @prop password
 * @prop email
 */
const loginSchema = new Schema<ILogin>({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true }
});

const Login = mongoose.model('Login', loginSchema);

export { Login };