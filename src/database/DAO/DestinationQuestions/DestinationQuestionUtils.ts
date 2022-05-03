import { FindOptions } from 'sequelize';
import DestinationQuestions from './DestinationQuestionModel';


export const DestinationQuestionFind = async (filters: FindOptions) => {
  try {
    const destination = await DestinationQuestions.findAll(filters);
    return destination;
  } catch (error) {
    console.log(error)
  }
};
