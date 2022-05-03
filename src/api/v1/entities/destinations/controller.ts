import { Request, Response } from 'express';
import { getDestinationList , getDestinationQuestionsList , getDestinationQuestionsStateList , getDestinationType} from './helpers';


export const getDestinationsList = async (req: Request, res: Response) => {
  try {
    const response = await getDestinationList();
    res.send(response);
  } catch (error) {
  }
};

export const getDestinationsQuestionsList = async (req: Request, res: Response) => {
  try {
    const response = await getDestinationQuestionsList();
    res.send(response);
  } catch (error) {
  }
};


export const getDestinationsQuestionsStateList = async (req: Request, res: Response) => {
  try {
    const response = await getDestinationQuestionsStateList();
    res.send(response);
  } catch (error) {
  }
};

export const getDestinationsType = async (req: Request, res: Response) => {
  try {
    const response = await getDestinationType();
    res.send(response);
  } catch (error) {
  }
};