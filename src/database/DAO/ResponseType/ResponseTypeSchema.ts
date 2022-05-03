'use strict';
import { DataTypes } from 'sequelize';

export const ResponseTypeSchema = {
  Ret_Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  Ret_Descripcion: {
    type: DataTypes.STRING(4000),
  },
  Ret_RequiereRango: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
  Ret_PermiteBateria: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
};
