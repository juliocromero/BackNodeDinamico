import { FindOptions } from 'sequelize';
import { MarcationsFind } from '../../../../database/DAO/Marcations/MarcationsUtils';


export const getMarcationsList = async () => {
  try {
    let filters: FindOptions = {};
    const question = await MarcationsFind(filters);
    return {
      data: question,
      status: 'ok',
    };
  } catch (error) {
    throw error;
  }
};


