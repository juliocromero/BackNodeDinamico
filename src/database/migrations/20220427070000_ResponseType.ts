'use strict';
import { DataTypes, QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize) {
    await queryInterface.createTable('Respuesta_Tipo', {
      Ret_Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      Ret_Descripcion: {
        type: DataTypes.STRING(4000),
      },
      Ret_RequiereRango: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      Ret_PermiteBateria: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    });
  },
  async down(queryInterface: QueryInterface, Sequelize) {
    await queryInterface.dropTable('Respuesta_Tipo');
  },
};
