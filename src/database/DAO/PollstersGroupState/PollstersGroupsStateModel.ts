import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connections';
import { PollsterGroupsStateSchema} from './PollstersGroupsStateSchema'


//Type de tabla
type PollstersGroupsStateModel = {
  Gee_Id: number 
  Gee_Descripcion: string  
};

//Class para models questions
class PollstersGroupsState extends Model<PollstersGroupsStateModel> {}

PollstersGroupsState.init(PollsterGroupsStateSchema,
  {
    sequelize,
    tableName: 'Grupo_Encuestador_Estado',
    timestamps: false,
  },
);

export default PollstersGroupsState;
