'use strict';
import { DataTypes, QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize) {
    await queryInterface.createTable('Encuesta', {
      Enc_Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      Cts_Id: {
        type: DataTypes.BIGINT,
      },
      Enc_FechaDesdeVigencia: {
        type: DataTypes.DATE,
      },
      Enc_FechaHastaVigencia: {
        type: DataTypes.DATE,
      },
      Dcu_Id: {
        type: DataTypes.BIGINT,
      },
      Des_Id: {
        type: DataTypes.BIGINT,
      },
      Ene_Id: {
        type: DataTypes.BIGINT,
      },
      Enc_Repetible: {
        type: DataTypes.BOOLEAN,
      },
      Enc_ResponderNoVigente: {
        type: DataTypes.BOOLEAN,
      },
      Enc_DiasMaximoNoVigente: {
        type: DataTypes.INTEGER,
      },
      Emp_Id: {
        type: DataTypes.BIGINT,
      },
    });
  },
  async down(queryInterface: QueryInterface, Sequelize) {
    await queryInterface.dropTable('Encuesta');
  },
};
