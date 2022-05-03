import { DataTypes } from 'sequelize';

export const ResultSurveySchema = {
  Ren_Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  Cts_Id: {
    type: DataTypes.BIGINT,
  },
  Enc_Id: {
    type: DataTypes.BIGINT,
  },
  Usu_Id: {
    type: DataTypes.BIGINT,
  },
  Ree_Id: {
    type: DataTypes.BIGINT,
  },
  Ren_FechaInicioRespuesta: {
    type: DataTypes.DATE,
  },
  Ren_FechaFinRespuesta: {
    type: DataTypes.DATE,
  },
  Ren_FechaRecuperacion: {
    type: DataTypes.DATE,
  },
  Cuc_Id: {
    type: DataTypes.BIGINT,
  },
  Dcu_Id: {
    type: DataTypes.BIGINT,
  },
  Mar_Id: {
    type: DataTypes.BIGINT,
  },
};
