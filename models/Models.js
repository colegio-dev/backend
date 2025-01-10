/* //importamos la conexion con la base de datos
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const alumnoModel = db.define(
  "facturador",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    nombreAlumno: { type: DataTypes.STRING },
    apellidoAlumno: { type: DataTypes.STRING },
    dniAlumno: { type: DataTypes.INTEGER, unique: true },
    fechaNac: { type: DataTypes.DATE },
    domicilio: { type: DataTypes.STRING },
    grado: { type: DataTypes.STRING },
    nombrePadre: { type: DataTypes.STRING },
    dniPadre: { type: DataTypes.INTEGER },
    telefonoPadre: { type: DataTypes.STRING },
    nombreMadre: { type: DataTypes.STRING },
    dniMadre: { type: DataTypes.INTEGER },
    telefonoMadre: { type: DataTypes.STRING },
    observaciones: { type: DataTypes.STRING },
    tipoPago: { type: DataTypes.STRING },
    importe: { type: DataTypes.INTEGER },
    cuotasPagadas: { type: DataTypes.INTEGER },
    comprobante: { type: DataTypes.STRING },
    estado: { type: DataTypes.STRING },
    totalCuotas: { type: DataTypes.INTEGER },
    montoPorCuota: { type: DataTypes.DECIMAL },
  },
  {
    timestamps: false,
    tableName: "students",
  }
);

export default alumnoModel;
 */



//importamos la conexion con la base de datos
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const alumnoModel = db.define(
    "facturador",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nombreAlumno: { type: DataTypes.STRING(100) },
      apellidoAlumno: { type: DataTypes.STRING(100) },
      dniAlumno: { type: DataTypes.INTEGER, unique: true },
      fechaNac: { type: DataTypes.DATE },
      domicilio: { type: DataTypes.STRING(255) },
      grado: { type: DataTypes.STRING(50) },
      nombrePadre: { type: DataTypes.STRING(100) },
      dniPadre: { type: DataTypes.INTEGER },
      telefonoPadre: { type: DataTypes.STRING(15) },
      nombreMadre: { type: DataTypes.STRING(100) },
      dniMadre: { type: DataTypes.INTEGER },
      telefonoMadre: { type: DataTypes.STRING(15) },
      observaciones: { type: DataTypes.TEXT },
      tipoPago: { type: DataTypes.STRING },
      importe: { type: DataTypes.INTEGER },
      cuotasPagadas: { type: DataTypes.INTEGER, defaultValue: 0 },
      comprobante: { type: DataTypes.STRING },
      totalCuotas: { type: DataTypes.INTEGER },
      montoPorCuota: { type: DataTypes.DECIMAL(10, 2) },
    },
    {
      timestamps: false,
      tableName: "students", // Asegúrate de que este nombre coincide con tu base de datos
    }
  );
  
  export default alumnoModel;
  