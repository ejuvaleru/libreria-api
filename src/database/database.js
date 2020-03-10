const Sequelize = require('sequelize').Sequelize;

export const sequelize = new Sequelize(
    'libreria',
    'root',
    //'Luis3006*',
    '', // Rodrigo
    {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000,
        },
        logging: false,
    }
);


