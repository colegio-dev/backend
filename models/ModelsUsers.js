import db from "../database/db.js";

import { DataTypes } from "sequelize";

const userModel = db.define('usuarios', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    nombres: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    legajo: { type: DataTypes.INTEGER },
    file: { type: DataTypes.STRING },
    username: {type:DataTypes.STRING},
    password: {type:DataTypes.STRING},
    user: {type:DataTypes.INTEGER}
},{
    timestamps:false
});

export default userModel;