import { SurveyModel } from '@database/DAO/Survey/SurveyModel';
import { DestroyOptions, FindOptions, UpdateOptions } from 'sequelize';
import {
  SurveyCreate,
  SurveyDelete,
  SurveyFind,
  SurveyFindOne,
  SurveyUpdate,
} from '../../../../database/DAO/Survey/SurveyUtils';
import { StatusRequest } from '../../types/enums';
import { RequestReponse } from '../../types/RequestResponse';

// ######### SURVEYS #########
export const getSurveyListRequest = async (): Promise<RequestReponse> => {
  try {
    const response = await SurveyFind({});
    return {
      data: response || [],
      status: StatusRequest.OK,
    };
  } catch (error) {
    return {
      data: null,
      status: StatusRequest.ERROR,
      message: `${error}`,
    };
  }
};

export const getSurveyRequest = async (
  Enc_Id: number,
): Promise<RequestReponse> => {
  try {
    let findOptions: FindOptions = { where: { Enc_Id } };
    const response = await SurveyFindOne(findOptions);
    return {
      data: response || null,
      status: StatusRequest.OK,
    };
  } catch (error) {
    return {
      data: null,
      status: StatusRequest.ERROR,
      message: `${error}`,
    };
  }
};

export const postSurveyRequest = async (
  Survey: SurveyModel,
): Promise<RequestReponse> => {
  try {
    const response = await SurveyCreate(Survey);
    return {
      data: response || null,
      status: StatusRequest.OK,
    };
  } catch (error) {
    return {
      data: null,
      status: StatusRequest.ERROR,
      message: `${error}`,
    };
  }
};

export const updateSurveyRequest = async (
  Enc_Id: number,
  Survey: SurveyModel,
): Promise<RequestReponse> => {
  try {
    const updateOptions: UpdateOptions = { where: { Enc_Id } };
    const response = await SurveyUpdate(Survey, updateOptions);
    return {
      data: response || null,
      status: StatusRequest.OK,
    };
  } catch (error) {
    return {
      data: null,
      status: StatusRequest.ERROR,
      message: `${error}`,
    };
  }
};

export const deleteSurveyRequest = async (
  Enc_Id: number,
): Promise<RequestReponse> => {
  try {
    const destroyOptions: DestroyOptions = { where: { Enc_Id } };
    const response = await SurveyDelete(destroyOptions);
    return {
      data: response || null,
      status: StatusRequest.OK,
    };
  } catch (error) {
    return {
      data: null,
      status: StatusRequest.ERROR,
      message: `${error}`,
    };
  }
};
// ######### SURVEYS #########
