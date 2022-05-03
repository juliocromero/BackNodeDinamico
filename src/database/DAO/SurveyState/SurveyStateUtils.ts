import { DestroyOptions, FindOptions, UpdateOptions } from 'sequelize';
import SurveyState from './SurveyStateModel';
import { SurveyStateModel } from './SurveyStateModel';

export const SurveyStateFind = async (findOptions: FindOptions) => {
  try {
    const response = await SurveyState.findAll(findOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const SurveyStateFindOne = async (findOptions: FindOptions) => {
  try {
    const response = await SurveyState.findOne(findOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const SurveyStateCreate = async (payload: SurveyStateModel) => {
  try {
    const response = await SurveyState.create(payload);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const SurveyStateUpdate = async (
  payload: SurveyStateModel,
  updateOptions: UpdateOptions,
) => {
  try {
    const response = await SurveyState.update(payload, updateOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const SurveyStateDelete = async (destroyOptions: DestroyOptions) => {
  try {
    const response = await SurveyState.destroy(destroyOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};
