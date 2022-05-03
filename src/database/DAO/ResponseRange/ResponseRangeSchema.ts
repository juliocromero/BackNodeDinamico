'use strict';
import { DataTypes } from 'sequelize';

export const ResponseRangeSchema = {
  Rer_Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  Pre_Id: {
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  Rer_OrdenRango: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  Rer_ValorInicial: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  Rer_ValorFinal: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  Rer_Descripcion: {
    type: DataTypes.STRING(4000),
  },
  Pre_IdProxima: {
    type: DataTypes.INTEGER,
  },
};
