import { DataTypes } from 'sequelize';

export const SubperiodSchema = {
  Spe_Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  Per_Id: {
    type: DataTypes.BIGINT,
  },
  Spe_Descripcion: {
    type: DataTypes.STRING(255),
  },
};
