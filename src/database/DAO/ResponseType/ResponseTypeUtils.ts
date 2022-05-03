import { DestroyOptions, FindOptions, UpdateOptions } from 'sequelize';
import ResponseType from './ResponseTypeModel';
import { ResponseTypeModel } from './ResponseTypeModel';

export const ResponseTypeFind = async (findOptions: FindOptions) => {
  try {
    const response = await ResponseType.findAll(findOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const ResponseTypeFindOne = async (findOptions: FindOptions) => {
  try {
    const response = await ResponseType.findOne(findOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const ResponseTypeCreate = async (payload: ResponseTypeModel) => {
  try {
    const response = await ResponseType.create(payload);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const ResponseTypeUpdate = async (
  payload: ResponseTypeModel,
  updateOptions: UpdateOptions,
) => {
  try {
    const response = await ResponseType.update(payload, updateOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const ResponseTypeDelete = async (destroyOptions: DestroyOptions) => {
  try {
    const response = await ResponseType.destroy(destroyOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};
