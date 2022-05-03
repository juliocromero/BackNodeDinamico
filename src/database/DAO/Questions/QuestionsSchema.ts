
import { DataTypes } from 'sequelize';

export const QuestionsSchema = {
  Cst_Id: {
    allowNull: false,
   autoIncrement: true,
   primaryKey: true,
   type: DataTypes.INTEGER
 },
 Cts_Nombre: {
   type: DataTypes.STRING
 },
 Cut_Id: {
   type: DataTypes.BIGINT
 },
 Sol_Id: {
   type: DataTypes.BIGINT
 },
 Cts_RequiereGeoPop: {
   type: DataTypes.BIGINT
 },
 Cuc_Id: {
   type: DataTypes.BIGINT
 },
 Ces_Id: {
   type: DataTypes.BIGINT
 },
 Ctv_Id: {
   primaryKey: true,
   type: DataTypes.INTEGER
 },
 Emp_Id: {
  type: DataTypes.BIGINT
},
Cts_CuestionarioInOut: {
  type: DataTypes.BIGINT
},
}