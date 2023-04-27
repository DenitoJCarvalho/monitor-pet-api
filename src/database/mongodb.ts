import { connect } from 'mongoose';

export function connectDatabase() {
  connect('mongodb://localhost:27017/mystudies')
    .then(res => console.log(`Mongodb connected.`))
    .catch(error => console.error(`No posible connect ${error}`));
}
