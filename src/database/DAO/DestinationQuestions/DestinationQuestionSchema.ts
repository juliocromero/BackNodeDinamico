import { DataTypes } from 'sequelize';

export const DestinationQuestionsSchema = {
  Dcu_Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  Cst_Id: {
    type: DataTypes.BIGINT,
  },
  Des_Id: {
    type: DataTypes.BIGINT,
  },
  Dce_Id: {
    type: DataTypes.BIGINT,
  },
  Dcu_AplicaNivel: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
};
