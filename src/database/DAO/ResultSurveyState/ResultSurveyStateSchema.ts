import { DataTypes } from 'sequelize';

export const ResultSurveyStateSchema = {
  Ree_Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  Ree_Descripcion: {
    type: DataTypes.STRING(255),
  },
};
