import { DestroyOptions, FindOptions, UpdateOptions } from 'sequelize';
import Subperiod from './SubperiodModel';
import { SubperiodModel } from './SubperiodModel';

export const SubperiodFind = async (findOptions: FindOptions) => {
  try {
    const response = await Subperiod.findAll(findOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const SubperiodFindOne = async (findOptions: FindOptions) => {
  try {
    const response = await Subperiod.findOne(findOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const SubperiodCreate = async (payload: SubperiodModel) => {
  try {
    const response = await Subperiod.create(payload);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const SubperiodUpdate = async (
  payload: SubperiodModel,
  updateOptions: UpdateOptions,
) => {
  try {
    const response = await Subperiod.update(payload, updateOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const SubperiodDelete = async (destroyOptions: DestroyOptions) => {
  try {
    const response = await Subperiod.destroy(destroyOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};
