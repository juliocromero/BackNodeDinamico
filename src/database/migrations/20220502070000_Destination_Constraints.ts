'use strict';
import { DataTypes, QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize) {
    await queryInterface.addConstraint('Encuesta', {
      fields: ['Cts_Id'],
      type: 'foreign key',
      name: 'FK_Encuesta_Cuestionario', // optional
      references: {
        table: 'Cuestionario',
        field: 'Cts_Id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },
  // async down(queryInterface: QueryInterface, Sequelize) {
  //   await queryInterface.dropTable('Destino_Tipo');
  // },
};
