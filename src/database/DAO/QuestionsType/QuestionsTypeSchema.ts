
import { DataTypes } from "sequelize";

export const QuestionsTypeSchema = {
  Cut_Id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.NUMBER,
  },
  Cut_Descripcion: {
    type: DataTypes.STRING,
  },
}