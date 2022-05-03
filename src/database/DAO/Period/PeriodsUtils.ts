import { FindOptions } from 'sequelize';
import PeriodsModel from './PeriodsModel';


export const PeriodsFind = async (filters: FindOptions) => {
  try {
    const periods = await PeriodsModel.findAll(filters);
    return periods;
  } catch (error) {
    console.log(error)
  }
};