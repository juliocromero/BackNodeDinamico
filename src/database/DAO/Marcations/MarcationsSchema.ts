
import { DataTypes } from 'sequelize';

export const MarcationsSchema = {
  Mar_Id: {
    allowNull: false,
   autoIncrement: true,
   primaryKey: true,
   type: DataTypes.BIGINT
 },
 Des_Id: {
   type: DataTypes.BIGINT
 },
 Mar_Fecha: {
   type: DataTypes.DATE
 },
 Mar_FechaEntrada: {
  type: DataTypes.TIME
},
Mar_FechaSalida: {
  type: DataTypes.TIME
},
Mar_LatitudEntrada: {
  type: DataTypes.STRING(255)
},
Mar_LongitudEntrada: {
  type: DataTypes.STRING(255)
},
Mar_LatitudSalida: {
  type: DataTypes.STRING(255)
},
Mar_LongitudSalida: {
  type: DataTypes.STRING(255)
},
}