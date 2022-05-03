import { DestroyOptions, FindOptions, UpdateOptions } from 'sequelize';
import ResultSurveyState from './ResultSurveyStateModel';
import { ResultSurveyStateModel } from './ResultSurveyStateModel';

export const ResultSurveyStateFind = async (findOptions: FindOptions) => {
  try {
    const response = await ResultSurveyState.findAll(findOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const ResultSurveyStateFindOne = async (findOptions: FindOptions) => {
  try {
    const response = await ResultSurveyState.findOne(findOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const ResultSurveyStateCreate = async (
  payload: ResultSurveyStateModel,
) => {
  try {
    const response = await ResultSurveyState.create(payload);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const ResultSurveyStateUpdate = async (
  payload: ResultSurveyStateModel,
  updateOptions: UpdateOptions,
) => {
  try {
    const response = await ResultSurveyState.update(payload, updateOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const ResultSurveyStateDelete = async (
  destroyOptions: DestroyOptions,
) => {
  try {
    const response = await ResultSurveyState.destroy(destroyOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};
