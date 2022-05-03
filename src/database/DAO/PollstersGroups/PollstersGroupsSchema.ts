
import { DataTypes } from 'sequelize';

export const PollsterGroupsSchema = {
  Gen_Id: {
    allowNull: false,
   autoIncrement: true,
   primaryKey: true,
   type: DataTypes.BIGINT
 },
 Gen_Nombre: {
   type: DataTypes.STRING(255)
 },
 Gee_Id: {
   primaryKey: true,
   type: DataTypes.BIGINT
 },
}