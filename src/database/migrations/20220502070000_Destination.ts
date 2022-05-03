'use strict';
import { DataTypes, QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize) {
    await queryInterface.createTable('Destino_Tipo', {
      Det_Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      Det_Nombre: {
        type: DataTypes.STRING(4000),
      },
      Det_Fisico: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      Emp_Id: {
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
    });
  },
  async down(queryInterface: QueryInterface, Sequelize) {
    await queryInterface.dropTable('Destino_Tipo');
  },
};
