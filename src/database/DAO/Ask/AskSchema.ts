import { DataTypes } from 'sequelize';

export const AsksSchema = {
  Pre_Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  Pre_Descripcion: {
    type: DataTypes.STRING(4000),
  },
  Pre_RequiereFoto: {
    type: DataTypes.BIGINT,
    allowNull : false
  },
  Pre_RequiereGeoloclizacion: {
    type: DataTypes.BIGINT,
    allowNull : false
  },
  Ret_Id: {
    type: DataTypes.BIGINT,
  },
  Pes_Id: {
    type: DataTypes.BIGINT,
  },
  Prc_Id: {
    type: DataTypes.BIGINT,
  },
  Pre_Orden: {
    type: DataTypes.INTEGER,
  },
  Pre_RequiereObservacion: {
    type: DataTypes.BIGINT,
  },
  Pre_Mandatoria: {
    type: DataTypes.BIGINT,
  }
};
