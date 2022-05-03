import { Model } from 'sequelize';
import { sequelize } from '../../connections';
import { SurveyStateSchema } from './SurveyStateSchema';
import Survey from '../Survey/SurveyModel';

//SurveyStateModel Type
export type SurveyStateModel = {
  Ene_Id: number;
  Ene_Descripcion: string;
};

// Extend model in class
class SurveyState extends Model<SurveyStateModel> {}

// Init Model with Schema
SurveyState.init(SurveyStateSchema, {
  sequelize,
  tableName: 'Encuesta_Estado',
  timestamps: false,
});

export default SurveyState;
