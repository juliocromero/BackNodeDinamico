import { Router } from 'express';
 import {getDestinationsList , getDestinationsQuestionsList , getDestinationsQuestionsStateList , getDestinationsType} from './controller'
const routes = Router();


routes.get('/list', getDestinationsList);
routes.get('/DestinationsQuestionlist', getDestinationsQuestionsList); //lista Destino cuestionario tipo
routes.get('/DestinationsQuestionState', getDestinationsQuestionsStateList); //lista destinos cuestionario estados
routes.get('/DestinationsType', getDestinationsType); //  lista tipos de destinos
export = routes;
