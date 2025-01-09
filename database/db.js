import { Sequelize } from "sequelize";

/* const db = new Sequelize('facturador', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
}) */
const db = new Sequelize('bdnhuvlf1htcf7vpoydy', 'urpybjl7zlmfzpzi', 'sBjj7RlZkDdP3X64zgOL',{
    host: 'bdnhuvlf1htcf7vpoydy-mysql.services.clever-cloud.com',
    dialect: 'mysql'
}) 
 
export default db;