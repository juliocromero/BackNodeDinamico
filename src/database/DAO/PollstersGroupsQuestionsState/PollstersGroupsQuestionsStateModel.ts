import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connections';
import { PollsterGroupsQuestionsStateSchema} from './PollstersGroupsQuestionsStateSchema'


//Type de tabla
type PollstersGroupsQuestionsStateModel = {
  Gce_Id: number 
  Gce_Descripcion: number  
};

//Class para models questions
class PollstersGroupsQuestionsState extends Model<PollstersGroupsQuestionsStateModel> {}

PollstersGroupsQuestionsState.init(PollsterGroupsQuestionsStateSchema,
  {
    sequelize,
    tableName: 'Grupo_Encuestador_Cuestionario_Estado',
    timestamps: false,
  },
);

export default PollstersGroupsQuestionsState;
