import { DataTypes } from 'sequelize';

export const SurveyStateSchema = {
  Ene_Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  Ene_Descripcion: {
    type: DataTypes.STRING(255),
  },
};
