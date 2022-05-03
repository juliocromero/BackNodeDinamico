
import { DataTypes } from 'sequelize';

export const PollsterGroupsStateSchema = {
  Gee_Id : {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  Gee_Descripcion : {
    type: DataTypes.STRING(255)
  }
}