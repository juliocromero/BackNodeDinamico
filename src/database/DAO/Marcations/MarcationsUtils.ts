import { FindOptions } from 'sequelize';
import MarcationsModel from './MarcationsModel';


export const MarcationsFind = async (filters: FindOptions) => {
  try {
    const marcations = await MarcationsModel.findAll(filters);
    return marcations;
  } catch (error) {
    console.log(error)
  }
};