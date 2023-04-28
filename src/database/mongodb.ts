import { connect } from 'mongoose';
import { Enviroment } from '../environment/keys';


//mongodb://localhost:27017/mystudies
export function connectDatabase() {
  connect(Enviroment.STREAM_MONGODB)
    .then(res => console.log(`Mongodb connected in cloud.`))
    .catch(error => console.error(`No posible connect ${error}`));
}

