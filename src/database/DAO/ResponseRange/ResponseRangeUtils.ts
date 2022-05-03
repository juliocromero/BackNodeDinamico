import { DestroyOptions, FindOptions, UpdateOptions } from 'sequelize';
import ResponseRange from './ResponseRangeModel';
import { ResponseRangeModel } from './ResponseRangeModel';

export const ResponseRangeFind = async (findOptions: FindOptions) => {
  try {
    const response = await ResponseRange.findAll(findOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const ResponseRangeFindOne = async (findOptions: FindOptions) => {
  try {
    const response = await ResponseRange.findOne(findOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const ResponseRangeCreate = async (payload: ResponseRangeModel) => {
  try {
    const response = await ResponseRange.create(payload);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const ResponseRangeUpdate = async (
  payload: ResponseRangeModel,
  updateOptions: UpdateOptions,
) => {
  try {
    const response = await ResponseRange.update(payload, updateOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const ResponseRangeDelete = async (destroyOptions: DestroyOptions) => {
  try {
    const response = await ResponseRange.destroy(destroyOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};
