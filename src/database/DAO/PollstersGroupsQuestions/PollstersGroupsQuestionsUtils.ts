import { FindOptions } from 'sequelize';
import PollstersGroupsQuestions from './PollstersGroupsQuestionsModel';


export const PollstersGroupsQuestionsFind = async (filters: FindOptions) => {
  try {
    const pollstersgroupsquestions = await PollstersGroupsQuestions.findAll(filters);
    return pollstersgroupsquestions;
  } catch (error) {
    console.log(error)
  }
};