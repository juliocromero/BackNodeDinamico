import { FindOptions } from 'sequelize';
import Asks from './AskModel';


export const AsksFind = async (filters: FindOptions) => {
  try {
    const ask = await Asks.findAll(filters);
    return ask;
  } catch (error) {
    console.log(error)
  }
};
