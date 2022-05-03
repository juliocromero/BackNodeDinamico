'use strict';
import { DataTypes, QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize) {
    await queryInterface.createTable('Encuesta_Repeticion', {
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
    });
  },
  async down(queryInterface: QueryInterface, Sequelize) {
    await queryInterface.dropTable('Encuesta_Repeticion');
  },
};
