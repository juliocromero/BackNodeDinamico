import { Model } from 'sequelize';
import { sequelize } from '../../connections';
import { ResultSurveyStateSchema } from './ResultSurveyStateSchema';

//ResultSurveyStateModel Type
export type ResultSurveyStateModel = {
  Ree_Id?: number;
  Ree_Descripcion: string;
};

// Extend model in class
class ResultSurveyState extends Model<ResultSurveyStateModel> {}

// Init Model with Schema
ResultSurveyState.init(ResultSurveyStateSchema, {
  sequelize,
  tableName: 'Resultado_Encuesta_Estado',
  timestamps: false,
});

export default ResultSurveyState;
