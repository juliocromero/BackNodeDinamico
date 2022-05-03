
import { DataTypes } from 'sequelize';

export const PeriodSchema = {
  Per_Id: {
    allowNull: false,
   autoIncrement: true,
   primaryKey: true,
   type: DataTypes.BIGINT
 },
 Per_Descripcion: {
   type: DataTypes.STRING(255)
 },
}