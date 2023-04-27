import express from 'express';
import cors from 'cors';

import { normalizePort } from './server/server';
import { connectDatabase } from './database/mongodb';
import { route } from './routes/routes';

const app = express();
const port = normalizePort(process.env.PORT || '9292');

app.use(cors({
  origin: '*',
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: false,
  optionsSuccessStatus: 204
}));
app.use(express.json());
app.use('/', route)

app.listen(port, () => {
  try {
    console.log(`Running in localhost:${9292}`);
    console.log(`${connectDatabase()}`);
  } catch (error: any) {
    console.log(`Error: ${error}`);
  }

});