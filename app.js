import express from "express";
import cors from "cors";
import mysql from "mysql";
import bodyParser from "body-parser";
import routes from "./routes/routes.js";
import routesPagos from "./routes/routesPago.js";
import routesUsers from "./routes/routesUsers.js";




// Configuración de Express
const app = express();
app.use(cors()); // Habilitar CORS
app.use(bodyParser.json()); // Middleware para procesar JSON
app.use(express.json()); // Middleware adicional para JSON

// Rutas
app.use("/students", routes);
app.use("/invoices", routesPagos);
app.use("/users", routesUsers);

// Configuración de la base de datos
const credentials = {
  host: "localhost",
  user: "root",
  password: "",
  database: "facturador",
};

// Configuración de conexión global para evitar reconexiones innecesarias
const dbConnection = mysql.createPool(credentials);

// Endpoint para login
/* app.post("/logins", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM logins WHERE username = ? AND password = ?";
  
  dbConnection.query(query, [username, password], (err, results) => {
    if (err) {
      return res.status(500).send({ error: "Error en el servidor", details: err.message });
    }
    if (results.length > 0) {
      return res.status(200).send(results[0]);
    } else {
      return res.status(400).send({ error: "Usuario no existe" });
    }
  });
}); */

// Endpoint para agregar estudiantes
app.post("/students", (req, res) => {
  const { nombreAlumno, apellidoAlumno, dniAlumno } = req.body;

  // Verificar si ya existe un estudiante con el mismo DNI
  const checkQuery = "SELECT * FROM students WHERE dniAlumno = ?";
  dbConnection.query(checkQuery, [dniAlumno], (err, results) => {
    if (err) {
      return res.status(500).send({ error: "Error en el servidor", details: err.message });
    }
    if (results.length > 0) {
      return res.status(400).send({ error: "El DNI ya está registrado." });
    }

    // Si no existe, insertar el nuevo estudiante
    const insertQuery = "INSERT INTO students (nombreAlumno, apellidoAlumno, dniAlumno) VALUES (?, ?, ?)";
    dbConnection.query(insertQuery, [nombreAlumno, apellidoAlumno, dniAlumno], (err) => {
      if (err) {
        return res.status(500).send({ error: "Error al guardar el estudiante", details: err.message });
      }
      return res.status(201).send({ message: "Estudiante agregado exitosamente." });
    });
  });
});

//Borra usuario de Firebase
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { firebaseUid } = req.body;

  try {
    if (firebaseUid) {
      await admin.auth().deleteUser(firebaseUid);
      console.log("Usuario eliminado de Firebase Authentication");
    }

    await db.query("DELETE FROM users WHERE id = ?", [id]);
    console.log("Usuario eliminado de la base de datos");
    res.status(200).send("Usuario eliminado");
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    res.status(500).send("Error al eliminar el usuario");
  }
});





// Iniciar el servidor
app.listen(8000, () => {
  console.log("Server UP running in http://localhost:8000/");
});
