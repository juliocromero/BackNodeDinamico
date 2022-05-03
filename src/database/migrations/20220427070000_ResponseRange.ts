'use strict';
import { DataTypes, QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize) {
    await queryInterface.createTable('Respuesta_Rango', {
      Rer_Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      Pre_Id: {
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      Rer_OrdenRango: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      Rer_ValorInicial: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      Rer_ValorFinal: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      Rer_Descripcion: {
        type: DataTypes.STRING(4000),
      },
      Pre_IdProxima: {
        type: DataTypes.INTEGER,
      },
    });
  },
  async down(queryInterface: QueryInterface, Sequelize) {
    await queryInterface.dropTable('Respuesta_Rango');
  },
};
