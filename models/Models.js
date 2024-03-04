//importamos la conexion con la base de datos
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const novedadModel = db.define('novedades', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    fecha: { type: DataTypes.TIME },
    lugar: { type: DataTypes.STRING },
    tipoNovedad: { type: DataTypes.STRING },
    comisaria: { type: DataTypes.INTEGER },
    unidad: { type: DataTypes.INTEGER },
    personalInterv: { type: DataTypes.STRING },
    resumen: { type: DataTypes.STRING }
},{
    timestamps: false
})



export default novedadModel;