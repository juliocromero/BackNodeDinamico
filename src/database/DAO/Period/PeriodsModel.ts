import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connections';
import {  PeriodSchema} from './/PeriodsSchema'

//Type de tabla
type PeriodModel = {
  Per_Id: number
 Per_Descripcion: number
 
};

//Class para models questions
class Periods extends Model<PeriodModel> {}

Periods.init(PeriodSchema,
  {
    sequelize,
    tableName: 'Periodo',
    timestamps: false,
  },
);

export default Periods;
