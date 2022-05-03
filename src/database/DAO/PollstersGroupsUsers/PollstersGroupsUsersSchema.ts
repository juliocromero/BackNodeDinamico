
import { DataTypes } from 'sequelize';

export const PollsterGroupsUsersSchema = {
  Geu_Id : {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  Usu_Id : {
    type: DataTypes.BIGINT
  },
  Gen_Id :{
    type : DataTypes.BIGINT
  },
  Emp_Id : {
    type :DataTypes.BIGINT
  },
}