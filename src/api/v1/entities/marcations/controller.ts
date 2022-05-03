import { Request, Response } from 'express';
import {getMarcationsList} from './helpers';

export const getMarcationList = async (req: Request, res: Response) => {
  try {
    const response = await getMarcationsList();
    res.send(response);
  } catch (error) {
  }
};