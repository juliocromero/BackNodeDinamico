import { Model } from 'sequelize';
import { sequelize } from '../../connections';
import { ResponseTypeSchema } from './ResponseTypeSchema';

//ResponseTypeModel Type
export type ResponseTypeModel = {
  Ret_Id?: number;
  Ret_Descripcion: string;
  Ret_RequiereRango: boolean;
  Ret_PermiteBateria: boolean;
};

// Extend model in class
class ResponseType extends Model<ResponseTypeModel> {}

// Init Model with Schema
ResponseType.init(ResponseTypeSchema, {
  sequelize,
  tableName: 'Respuesta_Tipo',
  timestamps: false,
});

export default ResponseType;
