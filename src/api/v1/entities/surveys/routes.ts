import { Router } from 'express';
import {
  deleteSurvey,
  getSurvey,
  getSurveyList,
  postSurvey,
  updateSurvey,
} from './controllers';
import { surveyValid } from './middlewares';

const routes = Router();

routes.get('/', getSurveyList);
routes.get('/:id', getSurvey);
routes.post('/', surveyValid, postSurvey);
routes.put('/:id', surveyValid, updateSurvey);
routes.delete('/:id', deleteSurvey);
export = routes;
