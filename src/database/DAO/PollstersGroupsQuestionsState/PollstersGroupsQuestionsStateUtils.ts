import { FindOptions } from 'sequelize';
import PollstersGroupsQuestionsState from './PollstersGroupsQuestionsStateModel';


export const PollstersGroupsQuestionsStateFind = async (filters: FindOptions) => {
  try {
    const pollstersgroupsquestions = await PollstersGroupsQuestionsState.findAll(filters);
    return pollstersgroupsquestions;
  } catch (error) {
    console.log(error)
  }
};