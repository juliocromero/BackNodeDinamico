import { Router } from 'express';
import {getMarcationList} from './controller';
const routes = Router();

routes.get('/list', getMarcationList);

export = routes;
