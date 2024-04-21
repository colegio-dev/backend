import db from "../database/db.js";

import { DataTypes } from "sequelize";

const indentModel = db.define('identificaciones', {
    id: { type:DataTypes.INTEGER, primaryKey: true },
    nombre: { type:DataTypes.STRING },
    apellido: { type:DataTypes.STRING },
    dni: { type:DataTypes.INTEGER },
    edad: { type:DataTypes.INTEGER },
    alias: { type:DataTypes.STRING },
    fecha_nac: { type:DataTypes.DATE },
    domicilio: { type:DataTypes.STRING },
    ocupacion: { type:DataTypes.STRING },
    estadoCivil: { type:DataTypes.STRING },
    img: { type:DataTypes.STRING }
},{
    timestamps:false
})  

export default indentModel;