import { connect, createConnection } from 'mongoose';
import { env } from '../environment/env';
import { config } from 'dotenv';

config({
  path: '../../env'
});

//mongodb://localhost:27017/mystudies
//Enviroment.STREAM_MONGODB
export function connectDatabase() {
  try {
    connect(env.MONGODB_URI)
      .then(res => {
        console.log(`Mongodb connected.`)
      })
      .catch(error => console.error(`No posible connect - ${error}`));
  } catch (error) {
    return error;
  }
}

