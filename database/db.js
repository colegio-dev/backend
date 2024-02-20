import { Sequelize } from "sequelize";

const db = new Sequelize('novedadesgenerales', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db;