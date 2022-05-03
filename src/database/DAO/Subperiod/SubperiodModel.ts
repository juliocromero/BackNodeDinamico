import { Model } from 'sequelize';
import { sequelize } from '../../connections';
import { SubperiodSchema } from './SubperiodSchema';

//SubperiodModel Type
export type SubperiodModel = {
  Spe_Id?: number;
  Per_Id: number;
  Spe_Descripcion: string;
};

// Extend model in class
class Subperiod extends Model<SubperiodModel> {}

// Init Model with Schema
Subperiod.init(SubperiodSchema, {
  sequelize,
  tableName: 'Subperiodo',
  timestamps: false,
});

export default Subperiod;
