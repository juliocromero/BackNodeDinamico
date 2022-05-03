import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connections';
import { AsksSchema } from './AskSchema';

//Type de tabla
type AsksModel = {
  Pre_Id: number 
  Pre_Descripcion: string 
  Pre_RequiereFoto: number
  Pre_RequiereGeoloclizacion: number 
  Ret_Id:  number 
  Pes_Id: number 
  Prc_Id: number 
  Pre_Orden: number 
  Pre_RequiereObservacion: number 
  Pre_Mandatoria: number
};

//Class para models questions
class Asks extends Model<AsksModel> {}

Asks.init(AsksSchema, {
  sequelize,
  tableName: 'Pregunta',
  timestamps: false,
});

export default Asks;
