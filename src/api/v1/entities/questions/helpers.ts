import { FindOptions } from 'sequelize';
import { QuestionFind } from '../../../../database/DAO/Questions/QuestionsUtils';
import { QuestionFindType } from '../../../../database/DAO/QuestionsType/QuestionsTypeUtils';
import { QuestionFindTypeVisualization } from '../../../../database/DAO/QuestionsTypeVisualization/QuestionsTypeUtils'
import { QuestionFindState } from '../../../../database/DAO/QuestionsState/QuestionsStateUtils';
import { QuestionFindClass } from '../../../../database/DAO/QuestionsClass/QuestionsClassUtils';


export const getQuestionsList = async () => {
  try {
    let filters: FindOptions = {};
    const question = await QuestionFind(filters);
    return {
      data: question,
      status: 'ok',
    };
  } catch (error) {
    throw error;
  }
};


export const getQuestionsType = async () => {
  try {
    let filters: FindOptions = {};
    const questionType = await QuestionFindType(filters);
    return {
      data: questionType,
      status: 'ok',
    };
  } catch (error) {
    throw error;
  }
};

export const getQuestionsTypeVisualization = async () => {
  try {
    let filters: FindOptions = {};
    const questionTypeVisualization = await QuestionFindTypeVisualization(filters);
    return {
      data: questionTypeVisualization,
      status: 'ok',
    };
  } catch (error) {
    throw error;
  }
};

export const getQuestionsState = async () => {
  try {
    let filters: FindOptions = {};
    const questionState = await QuestionFindState(filters);
    return {
      data: questionState,
      status: 'ok',
    };
  } catch (error) {
    throw error;
  }
};

export const getQuestionsClass = async () => {
  try {
    let filters: FindOptions = {};
    const questionClass = await QuestionFindClass(filters);
    return {
      data: questionClass,
      status: 'ok',
    };
  } catch (error) {
    throw error;
  }
};

