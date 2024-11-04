//importamos la conexion con la base de datos
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const alumnoModel = db.define('facturador', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    nombreAlumno: { type: DataTypes.STRING },
    apellidoAlumno: { type: DataTypes.STRING },
    dniAlumno: { type: DataTypes.INTEGER, unique: true },
    fechaNac: { type: DataTypes.DATE},
    domicilio: { type: DataTypes.STRING },
    grado: { type: DataTypes.STRING },
    nombrePadre: { type: DataTypes.STRING },
    dniPadre: {type: DataTypes.INTEGER},
    telefonoPadre: { type: DataTypes.INTEGER },
    nombreMadre: { type: DataTypes.STRING },
    dniMadre: {type: DataTypes.INTEGER},
    telefonoMadre: { type: DataTypes.INTEGER },
    observaciones: { type: DataTypes.STRING }
},{
    timestamps: false,
    tableName: 'students'
})




export default alumnoModel;