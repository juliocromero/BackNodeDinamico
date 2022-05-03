import { FindOptions } from 'sequelize';

import { DestinationFind } from '../../../../database/DAO/Destination/DestinationUtils';
import { DestinationQuestionFind} from '../../../../database/DAO/DestinationQuestions/DestinationQuestionUtils'
import { DestinationQuestionStateFind } from '../../../../database/DAO/DestinationQuestionsState/DestinationQuestionStateUtils';
import { DestinationTypeFind } from '../../../../database/DAO/DestinationType/DestinationTypeUtils';


export const getDestinationList = async () => {
  try {
    let filters: FindOptions = {};
    const destination = await DestinationFind(filters);
    return {
      data: destination,
      status: 'ok',
    };
  } catch (error) {
    throw error;
  }
};

export const getDestinationQuestionsList = async () => {
  try {
    let filters: FindOptions = {};
    const destinationquestions = await DestinationQuestionFind(filters);
    return {
      data: destinationquestions,
      status: 'ok',
    };
  } catch (error) {
    throw error;
  }
};


export const getDestinationQuestionsStateList = async () => {
  try {
    let filters: FindOptions = {};
    const destinationquestionsstate = await DestinationQuestionStateFind(filters);
    return {
      data: destinationquestionsstate,
      status: 'ok',
    };
  } catch (error) {
    throw error;
  }
};

export const getDestinationType= async () => {
  try {
    let filters: FindOptions = {};
    const destinationtype = await DestinationTypeFind(filters);
    return {
      data: destinationtype,
      status: 'ok',
    };
  } catch (error) {
    throw error;
  }
};