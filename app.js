import express from "express";
import cors from "cors";
import mysql from 'mysql'
import bodyParser from "body-parser";
import routes from "./routes/routes.js";
//import routesPagos from "./routes/routesPago.js";
import db from "./database/db.js";
import routesUsers from "./routes/routesUsers.js";




const app = express();

app.use(bodyParser.json())

app.use(cors()); 
app.use(express.json());
app.use('/students', routes);
//app.use('/invoices', routesPagos);
app.use('/users', routesUsers)

const corsOptions = {
    "Access-Control-Allow-Origin": "https://facturador-colegio.web.app/",
    "Access-Control-Allow-Credentials": true,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE, PATCH, OPTIONS',
    "Access-Control-Allow-Headers": 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
  };
  
app.use(cors(corsOptions));
  
/* const credentials = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'facturador'
};*/

const credentials = {
    host: 'byfxqbppdhxlzgmjswih-mysql.services.clever-cloud.com',
    user: 'ucbq5qf5c5qivn8g',
    password: 'iSiz3Uj56Bce8KmhIKqO',
    database: 'byfxqbppdhxlzgmjswih'
};


try{
    await db.authenticate()
    console.log('conexion exitosa a la DB')
} catch (error) {
    console.log(`El error de conexion es:${error}`)
}

app.listen(8000, () => {
    /* console.log("Server UP running in http://localhost:8000/") */
    console.log('server run in clevercloud')
});



app.post('/logins', (req, res) => {
    const {username, password} = req.body
    const values = [username, password]
    var connection = mysql.createConnection(credentials)
    connection.query('SELECT * FROM logins WHERE username = ? AND password = ?', values, (err, result)=> {
        if(err){
            res.status(500).send(err)
        }else{
            if(result.length>0){
                res.status(200).send(result[0])
            }else{
                res.status(400).send('usuario no existe')
            }
        }
    })
    connection.end()
})



app.post('/students', async (req, res) => {
    const { nombreAlumno, apellidoAlumno, dniAlumno } = req.body;

    try {
        // Verifica si el DNI ya existe
        const existingStudent = await Student.findOne({ dniAlumno });
        if (existingStudent) {
            return res.status(400).send('El DNI ya está registrado.');
        }

        // Agrega el nuevo estudiante
        const newStudent = new Student({ nombreAlumno, apellidoAlumno, dniAlumno });
        await newStudent.save();

        return res.status(201).send('Estudiante agregado exitosamente.');
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') { // MySQL error code for duplicate entry
            return res.status(400).send('El DNI ya está registrado.');
        }
        return res.status(500).send(error.message);
    }
});
