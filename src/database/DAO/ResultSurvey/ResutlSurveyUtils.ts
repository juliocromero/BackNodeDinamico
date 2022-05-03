import { DestroyOptions, FindOptions, UpdateOptions } from 'sequelize';
import ResultSurvey from './ResultSurveyModel';
import { ResultSurveyModel } from './ResultSurveyModel';

export const ResultSurveyFind = async (findOptions: FindOptions) => {
  try {
    const response = await ResultSurvey.findAll(findOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const ResultSurveyFindOne = async (findOptions: FindOptions) => {
  try {
    const response = await ResultSurvey.findOne(findOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const ResultSurveyCreate = async (payload: ResultSurveyModel) => {
  try {
    const response = await ResultSurvey.create(payload);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const ResultSurveyUpdate = async (
  payload: ResultSurveyModel,
  updateOptions: UpdateOptions,
) => {
  try {
    const response = await ResultSurvey.update(payload, updateOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const ResultSurveyDelete = async (destroyOptions: DestroyOptions) => {
  try {
    const response = await ResultSurvey.destroy(destroyOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};
