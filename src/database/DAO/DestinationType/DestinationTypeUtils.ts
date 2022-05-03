import { FindOptions } from 'sequelize';
import DestinationType from './DestinationTypeModel';


export const DestinationTypeFind = async (filters: FindOptions) => {
  try {
    const questions = await DestinationType.findAll(filters);
    return questions;
  } catch (error) {
    console.log(error)
  }
};
