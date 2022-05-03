'use strict';
import { DataTypes, QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize) {
    await queryInterface.createTable('Encuesta_Estado', {
      Ene_Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      Ene_Descripcion: {
        type: DataTypes.STRING(255),
      },
    });
  },
  async down(queryInterface: QueryInterface, Sequelize) {
    await queryInterface.dropTable('Encuesta_Estado');
  },
};
