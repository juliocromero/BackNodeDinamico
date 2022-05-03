import { Request, Response } from 'express';
import {
  deleteSurveyRequest,
  getSurveyListRequest,
  getSurveyRequest,
  postSurveyRequest,
  updateSurveyRequest,
} from './helpers';

export const getSurveyList = async (req: Request, res: Response) => {
  try {
    const response = await getSurveyListRequest();
    res.send(response);
  } catch (error) {}
};

export const getSurvey = async (req: Request, res: Response) => {
  const {
    params: { id },
  } = req;
  try {
    const response = await getSurveyRequest(Number(id));
    res.send(response);
  } catch (error) {}
};

export const postSurvey = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const response = await postSurveyRequest(body);
    res.send(response);
  } catch (error) {}
};

export const updateSurvey = async (req: Request, res: Response) => {
  const {
    params: { id },
    body,
  } = req;
  try {
    const response = await updateSurveyRequest(Number(id), body);
    res.send(response);
  } catch (error) {}
};

export const deleteSurvey = async (req: Request, res: Response) => {
  const {
    params: { id },
    body,
  } = req;
  try {
    const response = await deleteSurveyRequest(Number(id));
    res.send(response);
  } catch (error) {}
};
