import { Model } from 'sequelize';
import { sequelize } from '../../connections';
import { ResponseRangeSchema } from './ResponseRangeSchema';

//ResponseRangeModel Type
export type ResponseRangeModel = {
  Rer_Id?: number;
  Pre_Id: number;
  Rer_OrdenRango: number;
  Rer_ValorInicial: number;
  Rer_ValorFinal: number;
  Rer_Descripcion: string;
  Pre_IdProxima: number;
};

// Extend model in class
class ResponseRange extends Model<ResponseRangeModel> {}

// Init Model with Schema
ResponseRange.init(ResponseRangeSchema, {
  sequelize,
  tableName: 'Respuesta_Rango',
  timestamps: false,
});

export default ResponseRange;
