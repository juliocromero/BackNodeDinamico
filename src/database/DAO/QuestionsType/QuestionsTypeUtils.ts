import { FindOptions } from 'sequelize';

import QuestionsType from './QuestionsTypeModel'

export const QuestionFindType = async (filters: FindOptions) => {
  try {
    const questionstype = await QuestionsType.findAll(filters);
    return questionstype;
  } catch (error) {
    console.log(error)
  }
};
