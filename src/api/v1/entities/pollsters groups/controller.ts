import { Request, Response } from 'express';
import { getPollstersGroupsUsersList, getPollstersGroupsList , getPollstersGroupsQuestionsList , getPollstersGroupsQuestionsStateList , getPollstersGroupsStateList} from './helpers';


export const getPollsterGroupsList = async (req: Request, res: Response) => {
  try {
    const response = await getPollstersGroupsList();
    res.send(response);
  } catch (error) {
  }
};


export const getPollsterGroupsQuestionsList = async (req: Request, res: Response) => {
  try {
    const response = await getPollstersGroupsQuestionsList();
    res.send(response);
  } catch (error) {
  }
};


export const getPollsterGroupsQuestionsStateList = async (req: Request, res: Response) => {
  try {
    const response = await getPollstersGroupsQuestionsStateList();
    res.send(response);
  } catch (error) {
  }
};

export const getPollsterGroupsStateList = async (req: Request, res: Response) => {
  try {
    const response = await getPollstersGroupsStateList();
    res.send(response);
  } catch (error) {
  }
};

export const getPollsterGroupsUsersList = async (req: Request, res: Response) => {
  try {
    const response = await getPollstersGroupsUsersList();
    res.send(response);
  } catch (error) {
  }
};
