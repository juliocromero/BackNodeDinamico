import { FindOptions } from 'sequelize';

import QuestionsClass from './QuestionsClassModel'

export const QuestionFindClass = async (filters: FindOptions) => {
  try {
    const questionsclass = await QuestionsClass.findAll(filters);
    return questionsclass;
  } catch (error) {
    console.log(error)
  }
};