import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connections';
import {  PollsterGroupsSchema} from './PollstersGroupsSchema'

//Type de tabla
type PollstersGroupsModel = {
  Gen_Id?: number;
  Gen_Nombre: string;
  Gee_Id: number;
};

//Class para models questions
class PollstersGroups extends Model<PollstersGroupsModel> {}

PollstersGroups.init(PollsterGroupsSchema,
  {
    sequelize,
    tableName: 'Grupo_Encuestador',
    timestamps: false,
  },
);

export default PollstersGroups;
