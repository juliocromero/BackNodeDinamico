import { Router } from 'express';
import { getPeriodList } from './controller';
const routes = Router();

routes.get('/list', getPeriodList);

export = routes;
