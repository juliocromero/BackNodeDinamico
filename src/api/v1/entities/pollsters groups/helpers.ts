import { FindOptions } from 'sequelize';
import { PollstersGroupsFind } from '../../../../database/DAO/PollstersGroups/PollstersGroupsUtils';
import { PollstersGroupsQuestionsFind } from '../../../../database/DAO/PollstersGroupsQuestions/PollstersGroupsQuestionsUtils'; 
import { PollstersGroupsQuestionsStateFind } from '../../../../database/DAO/PollstersGroupsQuestionsState/PollstersGroupsQuestionsStateUtils';
import { PollstersGroupsStateFind } from '../../../../database/DAO/PollstersGroupState/PollstersGroupsStateUtils'; 
import { PollstersGroupsUsersFind } from '../../../../database/DAO/PollstersGroupsUsers/PollstersGroupsUsersUtils';


export const getPollstersGroupsList = async () => {
  try {
    let filters: FindOptions = {};
    const pollstersgroups = await PollstersGroupsFind(filters);
    return {
      data: pollstersgroups,
      status: 'ok',
    };
  } catch (error) {
    throw error;
  }
};



export const getPollstersGroupsQuestionsList = async () => {
  try {
    let filters: FindOptions = {};
    const pollstersgroupsquestions = await PollstersGroupsQuestionsFind(filters);
    return {
      data: pollstersgroupsquestions,
      status: 'ok',
    };
  } catch (error) {
    throw error;
  }
};

export const getPollstersGroupsQuestionsStateList = async () => {
  try {
    let filters: FindOptions = {};
    const pollstersgroupsquestionsstate = await PollstersGroupsQuestionsStateFind(filters);
    return {
      data: pollstersgroupsquestionsstate,
      status: 'ok',
    };
  } catch (error) {
    throw error;
  }
};

export const getPollstersGroupsStateList = async () => {
  try {
    let filters: FindOptions = {};
    const pollstersgroupsstate = await PollstersGroupsStateFind(filters);
    return {
      data: pollstersgroupsstate,
      status: 'ok',
    };
  } catch (error) {
    throw error;
  }
};


export const getPollstersGroupsUsersList = async () => {
  try {
    let filters: FindOptions = {};
    const pollstersgroupsusers = await PollstersGroupsUsersFind(filters);
    return {
      data: pollstersgroupsusers,
      status: 'ok',
    };
  } catch (error) {
    throw error;
  }
};