export = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_SERVER,
    dialect: process.env.DB_DIALECT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    timezone: '00:00',
    dialectOptions: {
      useUTC: false, //for reading from database
    },
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_SERVER,
    dialect: process.env.DB_DIALECT,
    timezone: '00:00',
    dialectOptions: {
      useUTC: false, //for reading from database
    },
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_SERVER,
    dialect: process.env.DB_DIALECT,
    timezone: '00:00',
    dialectOptions: {
      useUTC: false, //for reading from database
    },
  },
};
