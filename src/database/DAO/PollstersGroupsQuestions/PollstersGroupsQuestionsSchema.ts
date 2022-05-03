
import { DataTypes } from 'sequelize';

export const PollsterGroupsQuestionsSchema = {
    Gec_Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
      },
      Gen_Id: {
          primaryKey: true,
        type: DataTypes.BIGINT
      },
      Cts_id: {
        primaryKey: true,
        type: DataTypes.BIGINT
      },
      Gec_FechaDesdeVigencia: {
        type: DataTypes.DATE
      },
      Gec_FechaHastaVigencia: {
        type: DataTypes.DATE
      },
      Gce_Id: {
        primaryKey: true,
        type: DataTypes.BIGINT
      },
      Gec_ResponderNoVigente: {
        allowNull: false,
        type: DataTypes.BIGINT
      },
      Gec_DiasMaximoNoVigente: {
        type: DataTypes.INTEGER
      },
      Emp_Id: {
        type : DataTypes.BIGINT
      }
}