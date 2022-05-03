
import { DataTypes } from 'sequelize';

export const DestinationQuestionsStateSchema = {
    Dce_Id: {
        allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: DataTypes.BIGINT
     },
     Dce_Descripcion: {
       type: DataTypes.STRING
     },
}