import { FindOptions } from 'sequelize';

import { AsksFind } from '../../../../database/DAO/Ask/AskUtils';




export const getAsksList = async () => {
  try {
    let filters: FindOptions = {};
    const asks = await AsksFind(filters);
    return {
      data: asks,
      status: 'ok',
    };
  } catch (error) {
    throw error;
  }
};

