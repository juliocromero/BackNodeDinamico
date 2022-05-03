import {
  DestroyOptions,
  FindOptions,
  fn,
  cast,
  UpdateOptions,
} from 'sequelize';
import Survey, { SurveyModel } from './SurveyModel';
import SurveyState from '../SurveyState/SurveyStateModel';

export const SurveyFind = async (findOptions: FindOptions) => {
  try {
    const response = await Survey.findAll(findOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const SurveyFindOne = async (findOptions: FindOptions) => {
  try {
    const response = await Survey.findOne({
      ...findOptions,
      include: [
        {
          model: SurveyState,
          as: 'Estado',
          attributes: ['Ene_Descripcion'],
          required: true,
        },
      ],
    });
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const SurveyCreate = async (payload: SurveyModel) => {
  try {
    const { Enc_FechaDesdeVigencia, Enc_FechaHastaVigencia } = payload;

    // Ensure date field with correct format
    let finalPayload = {
      ...payload,
      Enc_FechaDesdeVigencia: cast(Enc_FechaDesdeVigencia, 'datetime'),
      Enc_FechaHastaVigencia: cast(Enc_FechaHastaVigencia, 'datetime'),
    };

    const response = await Survey.create(finalPayload);
    return response;
  } catch (error) {
    // console.log(error);
    throw error;
  }
};

export const SurveyUpdate = async (
  payload: SurveyModel,
  updateOptions: UpdateOptions,
) => {
  try {
    const { Enc_FechaDesdeVigencia, Enc_FechaHastaVigencia } = payload;

    // Ensure date field with correct format
    let finalPayload = {
      ...payload,
      Enc_FechaDesdeVigencia: cast(Enc_FechaDesdeVigencia, 'datetime'),
      Enc_FechaHastaVigencia: cast(Enc_FechaDesdeVigencia, 'datetime'),
    };

    const response = await Survey.update(finalPayload, updateOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export const SurveyDelete = async (destroyOptions: DestroyOptions) => {
  try {
    const response = await Survey.destroy(destroyOptions);
    return response;
  } catch (error) {
    throw error;
    // console.log(error);
  }
};
