
import { DataTypes } from 'sequelize';

export const PollsterGroupsQuestionsStateSchema = {
  Gce_Id: {
    allowNull: false,
   autoIncrement: true,
   primaryKey: true,
   type: DataTypes.BIGINT
 },
 Gce_Descripcion: {
   type: DataTypes.STRING
 },
}