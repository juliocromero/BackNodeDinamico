import { FindOptions } from 'sequelize';
import { PeriodsFind } from '../../../../database/DAO/Period/PeriodsUtils';


export const getPeriodsList = async () => {
  try {
    let filters: FindOptions = {};
    const question = await PeriodsFind(filters);
    return {
      data: question,
      status: 'ok',
    };
  } catch (error) {
    throw error;
  }
};

