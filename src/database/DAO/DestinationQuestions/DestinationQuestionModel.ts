import { Model } from 'sequelize';
import { sequelize } from '../../connections';
import { DestinationQuestionsSchema } from './DestinationQuestionSchema';

//Type de tabla
type DestinationQuestionsModel = {
  Dcu_Id: number;
  Cst_Id: number;
  Des_Id: number;
  Dce_Id: number;
  Dcu_AplicaNivel: boolean;
};

//Class para models questions
class DestinationQuestion extends Model<DestinationQuestionsModel> {}

DestinationQuestion.init(DestinationQuestionsSchema, {
  sequelize,
  tableName: 'Destino_Cuestionario',
  timestamps: false,
});

export default DestinationQuestion;
