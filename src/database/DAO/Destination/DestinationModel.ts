import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connections';
import { DestinationSchema } from './DestinationSchema';

//Type de tabla
type QuestionsModel = {
  Des_Id: number;
  Des_Nombre: string;
  Det_Id: number;
  Pai_Id: number;
  Pro_id: number;
  Loc_Id: number;
  Des_Direccion: number;
  Des_Latitud: string;
  Des_Longitud: string;
  Des_Logo: string;
  Emp_Id: number;
  Des_IdPadre:number
};

//Class para models questions
class Destination extends Model<QuestionsModel> {}

Destination.init(DestinationSchema, {
  sequelize,
  tableName: 'Destino',
  timestamps: false,
});

export default Destination;
