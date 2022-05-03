import { FindOptions } from 'sequelize';
import DestinationQuestionState from './DestinationQuestionStateModel';


export const DestinationQuestionStateFind = async (filters: FindOptions) => {
  try {
    const questions = await DestinationQuestionState.findAll(filters);
    return questions;
  } catch (error) {
    console.log(error)
  }
};
