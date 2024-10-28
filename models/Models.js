//importamos la conexion con la base de datos
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const alumnoModel = db.define('facturador', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    nombres: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    dni: { type: DataTypes.INTEGER },
    domicilio: { type: DataTypes.STRING },
    grado: { type: DataTypes.STRING },
    tutor: { type: DataTypes.STRING },
    telefono: { type: DataTypes.INTEGER },
    observaciones: { type: DataTypes.STRING }
},{
    timestamps: false,
    tableName: 'students'
})




export default alumnoModel;