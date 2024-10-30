import db from "../database/db.js";

import { DataTypes } from "sequelize";

const pagosModel = db.define('facturador', {
    id: { type:DataTypes.INTEGER, primaryKey: true },
    nombres: { type:DataTypes.STRING },
    apellido: { type:DataTypes.STRING },
    dni: { type:DataTypes.INTEGER },
    tipoPago: { type:DataTypes.STRING },
    importe: { type:DataTypes.DOUBLE },
    numCuota: { type:DataTypes.INTEGER },
    comprobante: { type:DataTypes.STRING }
},{
    timestamps:false,
    tableName: 'invoices'
})  

export default pagosModel;