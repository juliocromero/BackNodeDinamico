import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connections';
import { PollsterGroupsUsersSchema} from './PollstersGroupsUsersSchema'


//Type de tabla
type PollstersGroupsUsersModel = {
  Geu_Id : number
  Usu_Id : number 
  Gen_Id : number 
  Emp_Id : number
};

//Class para models questions
class PollstersGroupsUsers extends Model<PollstersGroupsUsersModel> {}

PollstersGroupsUsers.init(PollsterGroupsUsersSchema,
  {
    sequelize,
    tableName: 'Grupo_Encuestador_Usuario',
    timestamps: false,
  },
);

export default PollstersGroupsUsers;
