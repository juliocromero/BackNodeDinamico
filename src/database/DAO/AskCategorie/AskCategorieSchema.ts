import { DataTypes } from 'sequelize';

export const AsksCategorieSchema = {
  Prc_Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  Prc_Descripcion: {
    type: DataTypes.STRING(4000),
  },
  Emp_Id: {
    type: DataTypes.BIGINT,
    allowNull : false
  }
};
