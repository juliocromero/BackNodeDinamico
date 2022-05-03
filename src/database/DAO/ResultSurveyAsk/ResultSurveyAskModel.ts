import { Model } from 'sequelize';
import { sequelize } from '../../connections';
import { ResultSurveyAskSchema } from './ResultSurveyAskSchema';

//ResultSurveyAsk Type
export type ResultSurveyAskModel = {
  Rep_Id?: number;
  Pre_Id: number;
  Ren_Id: number;
  Rep_ValorRespuesta: string;
  Rep_ImagenAsociada: string;
  Rep_Observacion: string;
  Rep_FechaRespuesta: Date;
  Rep_Latitud: string;
  Rep_Longitud: string;
};

// Extend model in class
class ResultSurveyAsk extends Model<ResultSurveyAskModel> {}

// Init Model with Schema
ResultSurveyAsk.init(ResultSurveyAskSchema, {
  sequelize,
  tableName: 'Resultado_Encuesta_Pregunta',
  timestamps: false,
});

export default ResultSurveyAsk;
