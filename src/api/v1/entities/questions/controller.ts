import { Request, Response } from 'express';
import { getQuestionsList ,getQuestionsType , getQuestionsTypeVisualization , getQuestionsState , getQuestionsClass} from './helpers';

export const getQuestionList = async (req: Request, res: Response) => {
  try {
    const response = await getQuestionsList();
    res.send(response);
  } catch (error) {
  }
};
export const getQuestionsTypes = async (req: Request, res: Response) => {
  try {
  const response = await getQuestionsType();
  res.send(response)
  } catch (error) {
  }
};

export const getQuestionsTypeVisualizations = async (req: Request, res: Response) => {
  try {
  const response = await getQuestionsTypeVisualization();
  res.send(response)
  } catch (error) {
  }
};

export const getQuestionsStates = async (req: Request, res: Response) => {
  try {
  const response = await getQuestionsState();
  res.send(response)
  } catch (error) {
  }
};
export const getQuestionsclass = async (req: Request, res: Response) => {
  try {
  const response = await getQuestionsClass();
  res.send(response)
  } catch (error) {
  }
};