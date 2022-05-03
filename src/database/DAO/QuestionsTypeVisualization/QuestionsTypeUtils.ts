import { FindOptions } from 'sequelize';

import QuestionsTypeVisualization from './QuestionsTypeVisualizationModel'

export const QuestionFindTypeVisualization = async (filters: FindOptions) => {
  try {
    const questionstype = await QuestionsTypeVisualization.findAll(filters);
    return questionstype;
  } catch (error) {
    console.log(error)
  }
};
