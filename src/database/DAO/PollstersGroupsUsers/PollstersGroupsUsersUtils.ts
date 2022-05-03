import { FindOptions } from 'sequelize';
import PollstersGroupsUsersModel from './PollstersGroupsUsersModel';


export const PollstersGroupsUsersFind = async (filters: FindOptions) => {
  try {
    const pollstersgroupsquestions = await PollstersGroupsUsersModel.findAll(filters);
    return pollstersgroupsquestions;
  } catch (error) {
    console.log(error)
  }
};