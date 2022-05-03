import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connections';
import {  MarcationsSchema} from './MarcationsSchema'

//Type de tabla
type MarcationsModel = {
  Mar_Id: number
 Des_Id: number
 Mar_Fecha: Date
 Mar_FechaEntrada: Date
Mar_FechaSalida: Date
Mar_LatitudEntrada: Date
Mar_LongitudEntrada: string
Mar_LatitudSalida: string
Mar_LongitudSalida: string
};

//Class para models questions
class Marcations extends Model<MarcationsModel> {}

Marcations.init(MarcationsSchema,
  {
    sequelize,
    tableName: 'Marcacion',
    timestamps: false,
  },
);

export default Marcations;
