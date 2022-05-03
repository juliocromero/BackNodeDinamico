import { FindOptions } from 'sequelize';
import Destination from './DestinationModel';


export const DestinationFind = async (filters: FindOptions) => {
  try {
    const destination = await Destination.findAll(filters);
    return destination;
  } catch (error) {
    console.log(error)
  }
};
