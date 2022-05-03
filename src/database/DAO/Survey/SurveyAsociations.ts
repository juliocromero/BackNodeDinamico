import Survey from './SurveyModel';
import SurveyState from '../SurveyState/SurveyStateModel';

// Survey.hasOne(SurveyState);
export const initSurveyAssociations = survey => {
  // State
  survey.belongsTo(SurveyState, {
    foreignKey: 'Ene_Id',
    as: 'Estado',
  });
};
