import { Sequelize } from "sequelize";

/* const db = new Sequelize('novedadesgenerales', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
}) */

 const db = new Sequelize('benlvzvkhno5tql1tp7x', 'ux05ys8xc3hyetfw', '6LdGdPDqajTO4yC1Afrd',{
    host: 'benlvzvkhno5tql1tp7x-mysql.services.clever-cloud.com',
    dialect: 'mysql'
}) 

export default db;