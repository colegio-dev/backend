import { Sequelize } from "sequelize";

/*  const db = new Sequelize('novedadesgenerales', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})  */
   const db = new Sequelize('bdpynnjudwl1h6ugmc47', 'urqnauyuphr5vjig', 'aaXSNHjePyL8tunxRuPu',{
    host: 'bdpynnjudwl1h6ugmc47-mysql.services.clever-cloud.com',
    dialect: 'mysql'
})   

export default db;