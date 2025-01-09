import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const pagosModel = db.define(
    "facturador",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      nombreAlumno: { type: DataTypes.STRING },
      apellidoAlumno: { type: DataTypes.STRING },
      dniAlumno: { type: DataTypes.INTEGER },
      tipoPago: { type: DataTypes.STRING },
      importe: { type: DataTypes.INTEGER },
      cuotasPagadas: {type: DataTypes.INTEGER},
      comprobante: { type: DataTypes.STRING },
      estado: {type: DataTypes.STRING},
      totalCuotas: { type: DataTypes.INTEGER, defaultValue: 12 },
      montoPorCuota: { type: DataTypes.DECIMAL(10, 2) },
    },
    {
      timestamps: false,
      tableName: "invoices",
    }
  );
  
export default pagosModel