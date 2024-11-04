import { Sequelize } from "sequelize";

/* const db = new Sequelize('facturador', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
}) */
const db = new Sequelize('byfxqbppdhxlzgmjswih', 'ucbq5qf5c5qivn8g', 'iSiz3Uj56Bce8KmhIKqO',{
    host: 'byfxqbppdhxlzgmjswih-mysql.services.clever-cloud.com',
    dialect: 'mysql'
})   
 
export default db;