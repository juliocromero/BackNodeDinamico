import { DataTypes } from 'sequelize';

export const DestinationSchema = {
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
};
