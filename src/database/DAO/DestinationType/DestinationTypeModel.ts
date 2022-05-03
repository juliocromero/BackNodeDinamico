import { Model } from 'sequelize';
import { sequelize } from '../../connections';
import { DestinationTypesSchema } from './DestinationTypeSchema';

//Type de tabla
type DestinationTypeModel = {
  Det_Id: number;
  Det_Nombre: string;
  Det_Fisico: boolean;
  Emp_Id: number;
};

//Class para models questions
class DestinationType extends Model<DestinationTypeModel> {}

DestinationType.init(DestinationTypesSchema, {
  sequelize,
  tableName: 'Destino_Tipo',
  timestamps: false,
});

export default DestinationType;
