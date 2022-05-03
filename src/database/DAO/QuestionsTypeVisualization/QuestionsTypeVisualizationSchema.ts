
import { DataTypes } from "sequelize";

export const QuestionsTypeVisualizationSchema = {
  Ctv_Id: {
    allowNull: false,
   autoIncrement: true,
   primaryKey: true,
   type: DataTypes.BIGINT
 },
 Ctv_Descripcion: {
   type: DataTypes.STRING
 },
}