'use strict';
import { DataTypes, QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize) {
    await queryInterface.createTable('Subperiodo', {
      Spe_Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      Per_Id: {
        type: DataTypes.BIGINT,
      },
      Spe_Descripcion: {
        type: DataTypes.STRING(255),
      },
    });
  },
  async down(queryInterface: QueryInterface, Sequelize) {
    await queryInterface.dropTable('Subperiodo');
  },
};
