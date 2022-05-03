import { DestroyOptions, FindOptions, UpdateOptions } from 'sequelize';
import SurveyReplayType from './SurveyReplayTypeModel';
import { SurveyReplayTypeModel } from './SurveyReplayTypeModel';

export const SurveyReplayTypeFind = async (findOptions: FindOptions) => {
  try {
    const response = await SurveyReplayType.findAll(findOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const SurveyReplayTypeFindOne = async (findOptions: FindOptions) => {
  try {
    const response = await SurveyReplayType.findOne(findOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const SurveyReplayTypeCreate = async (payload: SurveyReplayTypeModel) => {
  try {
    const response = await SurveyReplayType.create(payload);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const SurveyReplayTypeUpdate = async (
  payload: SurveyReplayTypeModel,
  updateOptions: UpdateOptions,
) => {
  try {
    const response = await SurveyReplayType.update(payload, updateOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const SurveyReplayTypeDelete = async (destroyOptions: DestroyOptions) => {
  try {
    const response = await SurveyReplayType.destroy(destroyOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};
