import { DataTypes } from "sequelize";

export const QuestionsClassSchema = {
    Cuc_Id: {
        allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: DataTypes.BIGINT
     },
     Cuc_Descripcion: {
       type: DataTypes.STRING
     },
     Emp_Id: {
         type : DataTypes.BIGINT
     }
}