import { Router } from 'express';
import { getPollsterGroupsUsersList ,  getPollsterGroupsList , getPollsterGroupsQuestionsList , getPollsterGroupsQuestionsStateList , getPollsterGroupsStateList} from './controller'
const routes = Router();
routes.get('/list',getPollsterGroupsList);
routes.get('/PollstersGroupsQuestions',getPollsterGroupsQuestionsList);
routes.get('/PollstersGroupsQuestionsState',getPollsterGroupsQuestionsStateList);
routes.get('/PollstersGroupsState',getPollsterGroupsStateList);
routes.get('/PollstersGroupsUsers',getPollsterGroupsUsersList);
export = routes;
