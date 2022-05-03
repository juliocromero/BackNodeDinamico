import { Request, Response } from 'express';
import { getAsksList} from './helpers';


export const getAskList = async (req: Request, res: Response) => {
  try {
    const response = await getAsksList();
    res.send(response);
  } catch (error) {
  }
};

