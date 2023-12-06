
import Sequelize from 'sequelize';
import { config } from '../config/config.js';

const { db } = config;

const sequelize = new Sequelize(db.name, db.user, db.password, {
    host: db.host,
    port: db.port,
    dialect: db.dialect,
    define: {
        timestamps: false
    },
});

export default sequelize;
