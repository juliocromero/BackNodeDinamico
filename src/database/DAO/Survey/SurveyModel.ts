import { Model } from 'sequelize';
import { Cast } from 'sequelize/types/utils';
import { sequelize } from '../../connections';
import { initSurveyAssociations } from './SurveyAsociations';
import { SurveySchema } from './SurveySchema';

//SurveyModel Type
export type SurveyModel = {
  Enc_Id?: number;
  Cts_Id: number;
  Enc_FechaDesdeVigencia: Date | Cast;
  Enc_FechaHastaVigencia: Date | Cast;
  Dcu_Id: number;
  Des_Id: number;
  Ene_Id: number;
  Enc_Repetible: boolean;
  Enc_ResponderNoVigente: boolean;
  Enc_DiasMaximoNoVigente: number;
  Emp_Id: number;
};

// Extend model in class
class Survey extends Model<SurveyModel> {}

// Init Model with Schema
Survey.init(SurveySchema, {
  sequelize,
  tableName: 'Encuesta',
  timestamps: false,
});

initSurveyAssociations(Survey);

export default Survey;
