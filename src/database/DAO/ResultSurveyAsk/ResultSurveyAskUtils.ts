import { DestroyOptions, FindOptions, UpdateOptions } from 'sequelize';
import ResultSurveyAsk from './ResultSurveyAskModel';
import { ResultSurveyAskModel } from './ResultSurveyAskModel';

export const ResultSurveyAskFind = async (findOptions: FindOptions) => {
  try {
    const response = await ResultSurveyAsk.findAll(findOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const ResultSurveyAskFindOne = async (findOptions: FindOptions) => {
  try {
    const response = await ResultSurveyAsk.findOne(findOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const ResultSurveyAskCreate = async (
  payload: ResultSurveyAskModel,
) => {
  try {
    const response = await ResultSurveyAsk.create(payload);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const ResultSurveyAskUpdate = async (
  payload: ResultSurveyAskModel,
  updateOptions: UpdateOptions,
) => {
  try {
    const response = await ResultSurveyAsk.update(payload, updateOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const ResultSurveyAskDelete = async (
  destroyOptions: DestroyOptions,
) => {
  try {
    const response = await ResultSurveyAsk.destroy(destroyOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};
