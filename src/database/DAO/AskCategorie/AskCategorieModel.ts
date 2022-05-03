import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connections';
import { AsksCategorieSchema } from './AskCategorieSchema';

//Type de tabla
type AsksCategorieModel = {
  Prc_Id: number 
  Prc_Descripcion: string 
  Emp_Id: number
};

//Class para models questions
class AsksCategorie extends Model<AsksCategorieModel> {}

AsksCategorie.init(AsksCategorieSchema, {
  sequelize,
  tableName: 'Pregunta_Categoria',
  timestamps: false,
});

export default AsksCategorie;
