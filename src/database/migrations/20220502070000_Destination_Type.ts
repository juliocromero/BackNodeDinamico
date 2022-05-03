'use strict';
import { DataTypes, QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize) {
    await queryInterface.createTable('Destino', {
      Des_Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      Des_Nombre: {
        type: DataTypes.STRING,
      },
      Det_Id: {
        type: DataTypes.BIGINT,
      },
      Pai_Id: {
        type: DataTypes.BIGINT,
      },
      Pro_id: {
        type: DataTypes.BIGINT,
      },
      Loc_Id: {
        type: DataTypes.BIGINT,
      },
      Des_Direccion: {
        type: DataTypes.BIGINT,
      },
      Des_Latitud: {
        type: DataTypes.STRING,
      },
      Des_Longitud: {
        type: DataTypes.STRING,
      },
      Des_Logo: {
        type: DataTypes.STRING,
      },
      Emp_Id: {
        type: DataTypes.BIGINT,
      },
      Des_IdPadre: {
        type: DataTypes.BIGINT,
      },
    });
  },
  async down(queryInterface: QueryInterface, Sequelize) {
    await queryInterface.dropTable('Destino');
  },
};
