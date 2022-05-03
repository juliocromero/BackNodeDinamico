import { DataTypes } from 'sequelize';

export const SurveyReplayTypeSchema = {
  Ert_Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  Ert_Descripcion: {
    type: DataTypes.STRING(255),
  },
};
