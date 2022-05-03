import { FindOptions } from 'sequelize';

import QuestionsState from './QuestionsStateModel'

export const QuestionFindState = async (filters: FindOptions) => {
  try {
    const questionsstate = await QuestionsState.findAll(filters);
    return questionsstate;
  } catch (error) {
    console.log(error)
  }
};
