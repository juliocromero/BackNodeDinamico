import { Sequelize } from 'sequelize';
import config from './config/config';

const sequelizeCofig = config[process.env.NODE_ENV || ''];

export const sequelize = new Sequelize(sequelizeCofig);
