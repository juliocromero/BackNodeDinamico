import { Request, Response } from 'express';
import { getPeriodsList} from './helpers';

export const getPeriodList = async (req: Request, res: Response) => {
  try {
    const response = await getPeriodsList();
    res.send(response);
  } catch (error) {
  }
};
