import { DataTypes } from 'sequelize';

export const ResultSurveyAskSchema = {
  Rep_Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  Pre_Id: {
    type: DataTypes.BIGINT,
  },
  Ren_Id: {
    type: DataTypes.BIGINT,
  },
  Rep_ValorRespuesta: {
    type: DataTypes.STRING(4000),
  },
  Rep_ImagenAsociada: {
    type: DataTypes.STRING(4000),
  },
  Rep_Observacion: {
    type: DataTypes.STRING(4000),
  },
  Rep_FechaRespuesta: {
    type: DataTypes.DATE,
  },
  Rep_Latitud: {
    type: DataTypes.STRING(255),
  },
  Rep_Longitud: {
    type: DataTypes.STRING(255),
  },
};
