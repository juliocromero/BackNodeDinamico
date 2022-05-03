import { DestroyOptions, FindOptions, UpdateOptions } from 'sequelize';
import SurveyReplay from './SurveyReplayModel';
import { SurveyReplayModel } from './SurveyReplayModel';

export const SurveyReplayFind = async (findOptions: FindOptions) => {
  try {
    const response = await SurveyReplay.findAll(findOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const SurveyReplayFindOne = async (findOptions: FindOptions) => {
  try {
    const response = await SurveyReplay.findOne(findOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const SurveyReplayCreate = async (payload: SurveyReplayModel) => {
  try {
    const response = await SurveyReplay.create(payload);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const SurveyReplayUpdate = async (
  payload: SurveyReplayModel,
  updateOptions: UpdateOptions,
) => {
  try {
    const response = await SurveyReplay.update(payload, updateOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const SurveyReplayDelete = async (destroyOptions: DestroyOptions) => {
  try {
    const response = await SurveyReplay.destroy(destroyOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};
