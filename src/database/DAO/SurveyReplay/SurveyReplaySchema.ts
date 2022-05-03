import { DataTypes } from 'sequelize';

export const SurveyReplaySchema = {
  Enr_Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  Enc_Id: {
    type: DataTypes.BIGINT,
  },
  Per_Id: {
    type: DataTypes.BIGINT,
  },
  Spe_Id: {
    type: DataTypes.BIGINT,
  },
  Ert_Id: {
    type: DataTypes.BIGINT,
  },
};
