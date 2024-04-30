import db from "../database/db.js";

import { DataTypes } from "sequelize";

const loginModel = db.define('login', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    username: {type:DataTypes.STRING},
    password: {type:DataTypes.STRING},
    user: {type:DataTypes.INTEGER}
},{
    timestamps:false
});

export default loginModel;