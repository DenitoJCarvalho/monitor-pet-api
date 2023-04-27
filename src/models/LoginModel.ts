import mongoose, { Schema, SchemaType } from 'mongoose';

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
  email: { type: String, required: true },
  profile: { type: String, required: true },
  initialDate: { type: Date }
});

const Login = mongoose.model('Login', loginSchema);

export { Login };