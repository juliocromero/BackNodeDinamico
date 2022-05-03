import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express, { Application, json, urlencoded } from 'express';
import os from 'os';
import routesDir from './routes';
// import connection from '@database/connections';

const hostname = os.hostname();

const port = process.env.PORT || 3000;

const app: Application = express();

app.set('port', port);

// Middlewares
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes
app.use('', routesDir);

// DB Connection

app.listen({ hostname, port }, () => {
  console.log(`Server running on port ${port}`);
});
