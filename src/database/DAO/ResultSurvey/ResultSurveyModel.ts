import { Model } from 'sequelize';
import { sequelize } from '../../connections';
import { ResultSurveySchema } from './ResultSurveySchema';

//ResultSurveyModel Type
export type ResultSurveyModel = {
  Ren_Id?: number;
  Cts_Id: number;
  Enc_Id: number;
  Usu_Id: number;
  Ree_Id: number;
  Ren_FechaInicioRespuesta: Date;
  Ren_FechaFinRespuesta: Date;
  Ren_FechaRecuperacion: Date;
  Cuc_Id: number;
  Dcu_Id: number;
  Mar_Id: number;
};

// Extend model in class
class ResultSurvey extends Model<ResultSurveyModel> {}

// Init Model with Schema
ResultSurvey.init(ResultSurveySchema, {
  sequelize,
  tableName: 'Resultado_Encuesta',
  timestamps: false,
});

export default ResultSurvey;
