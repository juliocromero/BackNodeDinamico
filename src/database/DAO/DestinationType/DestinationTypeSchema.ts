import { DataTypes } from 'sequelize';

export const DestinationTypesSchema = {
  Det_Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  Det_Nombre: {
    type: DataTypes.STRING(4000),
  },
  Det_Fisico: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  Emp_Id: {
    type: DataTypes.BIGINT,
  },
};
