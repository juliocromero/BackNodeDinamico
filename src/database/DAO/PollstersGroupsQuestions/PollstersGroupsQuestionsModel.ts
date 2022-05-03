import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connections';
import { PollsterGroupsQuestionsSchema} from './PollstersGroupsQuestionsSchema'


//Type de tabla
type PollstersGroupsModel = {
  Gec_Id: number 
  Gen_Id: number 
  Cts_id:  number
  Gec_FechaDesdeVigencia: Date 
  Gec_FechaHastaVigencia: Date 
  Gce_Id: number 
  Gec_ResponderNoVigente: number 
  Gec_DiasMaximoNoVigente: number 
  Emp_Id: number 
};

//Class para models questions
class PollstersGroups extends Model<PollstersGroupsModel> {}

PollstersGroups.init(PollsterGroupsQuestionsSchema,
  {
    sequelize,
    tableName: 'Grupo_Encuestador_Cuestionario',
    timestamps: false,
  },
);

export default PollstersGroups;
