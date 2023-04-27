import { Date } from "mongoose";

/**
 * @interface ILogin
 * @prop id
 * @prop name
 * @prop password
 * @prop email
 */
export interface ILogin {
  id?: string,
  name: string,
  password: string,
  email: string,
  profile: string,
  initialDate?: string
}