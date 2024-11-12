//importamos la conexion con la base de datos
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const userModel = db.define('facturador', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    uid: {type: DataTypes.INTEGER},
    nombreUser: { type: DataTypes.STRING },
    apellidoUser: { type: DataTypes.STRING },
    usuario: {  type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    user: {type: DataTypes.STRING}
},{
    timestamps: false,
    tableName: 'users'
})




export default userModel;