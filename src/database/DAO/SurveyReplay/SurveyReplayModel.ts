import { Model } from 'sequelize';
import { sequelize } from '../../connections';
import { SurveyReplaySchema } from './SurveyReplaySchema';

//SurveyReplayModel Type
export type SurveyReplayModel = {
  Enr_Id: number;
  Enc_Id: number;
  Per_Id: number;
  Spe_Id: number;
  Ert_Id: number;
};

// Extend model in class
class SurveyReplay extends Model<SurveyReplayModel> {}

// Init Model with Schema
SurveyReplay.init(SurveyReplaySchema, {
  sequelize,
  tableName: 'Encuesta_Repeticion',
  timestamps: false,
});

export default SurveyReplay;
