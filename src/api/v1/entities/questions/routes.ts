import { Router } from 'express';
import { getQuestionList , getQuestionsTypes, getQuestionsTypeVisualizations , getQuestionsStates , getQuestionsclass} from './controller';
const routes = Router();

routes.get('/list', getQuestionList);
routes.get('/type' , getQuestionsTypes);
routes.get('/typeVisualization' , getQuestionsTypeVisualizations);
routes.get('/states' , getQuestionsStates);
routes.get('/class' , getQuestionsclass);
export = routes;
