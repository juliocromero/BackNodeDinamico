import { Router } from 'express';
import {
  getAskList
} from './controllers';
const routes = Router();

routes.get('/list', getAskList);

export = routes;
