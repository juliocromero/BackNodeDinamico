import { DataTypes } from "sequelize";

export const QuestionsStateSchema = {
    Ces_Id: {
        allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: DataTypes.BIGINT
     },
     Ces_Descripcion: {
       type: DataTypes.STRING
     },
}