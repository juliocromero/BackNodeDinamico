import { FindOptions } from 'sequelize';
import PollstersGroupsStateModel from './PollstersGroupsStateModel';


export const PollstersGroupsStateFind = async (filters: FindOptions) => {
  try {
    const pollstersgroupsquestions = await PollstersGroupsStateModel.findAll(filters);
    return pollstersgroupsquestions;
  } catch (error) {
    console.log(error)
  }
};