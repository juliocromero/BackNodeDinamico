import { Model } from 'sequelize';
import { sequelize } from '../../connections';
import { SurveyReplayTypeSchema } from './SurveyReplayTypeSchema';

//SurveyReplayTypeModel Type
export type SurveyReplayTypeModel = {
  Ert_Id: number;
  Ert_Descripcion: string;
};

// Extend model in class
class SurveyReplayType extends Model<SurveyReplayTypeModel> {}

// Init Model with Schema
SurveyReplayType.init(SurveyReplayTypeSchema, {
  sequelize,
  tableName: 'Encuesta_Repeticion_Tipo',
  timestamps: false,
});

export default SurveyReplayType;
