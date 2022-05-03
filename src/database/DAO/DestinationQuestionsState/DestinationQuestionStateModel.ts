
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connections';
import {  DestinationQuestionsStateSchema} from './DestinationQuestionStateSchema'

//Type de tabla
type DestinationQuestionsStateModel = {
  Dce_Id: number
  Dce_Descripcion: string 
};

//Class para models questions
class DestinationQuestionState extends Model<DestinationQuestionsStateModel> {}

DestinationQuestionState.init(DestinationQuestionsStateSchema,
  {
    sequelize,
    tableName: 'Destino_Cuestionario_Estado',
    timestamps: false,
  },
);

export default DestinationQuestionState;