import db from "../database/db.js";

import { DataTypes } from "sequelize";

const userModel = db.define('login', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    user: { type: DataTypes.STRING },
    username: { type: DataTypes.STRING},
    password: { type: DataTypes.STRING }
},{
    timestamps: false
});

export default userModel;