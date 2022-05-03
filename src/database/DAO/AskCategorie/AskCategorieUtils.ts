import { FindOptions } from 'sequelize';
import AskCategorie from './AskCategorieModel';


export const AsksCategorieFind = async (filters: FindOptions) => {
  try {
    const askcategorie = await AskCategorie.findAll(filters);
    return askcategorie;
  } catch (error) {
    console.log(error)
  }
};
