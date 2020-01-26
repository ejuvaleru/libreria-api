const Sequelize = require('sequelize').Sequelize;

export const sequelize = new Sequelize(
    'libreria',
    'root',
    //'3006', // Guevara
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


