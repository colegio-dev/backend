import { Sequelize } from "sequelize";

const db = new Sequelize('facturador', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})  
/*    const db = new Sequelize('bgvrspqkhbebqtwjz6xe', 'u2zpuhjtoirav8rn', 'nvmLjlKyBkOBgw2DbDH9',{
    host: 'bgvrspqkhbebqtwjz6xe-mysql.services.clever-cloud.com',
    dialect: 'mysql'
})   
 */
export default db;