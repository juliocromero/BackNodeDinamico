import { FindOptions } from 'sequelize';
import Questions from './Questionsmodel';


export const QuestionFind = async (filters: FindOptions) => {
  try {
    const questions = await Questions.findAll(filters);
    return questions;
  } catch (error) {
    console.log(error)
  }
};


