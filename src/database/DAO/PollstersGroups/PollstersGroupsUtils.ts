import { FindOptions } from 'sequelize';
import PollstersGroups from './PollstersGroupsModel';


export const PollstersGroupsFind = async (filters: FindOptions) => {
  try {
    const questions = await PollstersGroups.findAll(filters);
    return questions;
  } catch (error) {
    console.log(error)
  }
};