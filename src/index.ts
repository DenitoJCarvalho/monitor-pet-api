import express from 'express';
import cors from 'cors';

import { normalizePort } from './server/server';
import { connectDatabase } from './database/mongodb';
import { route } from './routes/routes';
import { env } from './environment/env';

const app = express();
const port = normalizePort(process.env.PORT || '9292');

app.use(cors({
  origin: '*',
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: ['Content-Type', 'Authorization', env.URL_LOCAL],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true
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