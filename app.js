import express from "express";
import cors from "cors";
import mysql from 'mysql'
import routes from "./routes/routes.js";
import routesIdent from './routes/routesIdent.js';
import routesUsers from './routes/routesUsers.js' 
import routesLogin from "./routes/routesLogin.js";
import db from "./database/db.js";

const app = express();

app.use(cors()); 
app.use(express.json());
app.use('/novedades', routes);
app.use('/identificaciones', routesIdent);
app.use('/usuarios', routesUsers);
app.use('/logins', routesLogin);


const credentials = {
    host: 'bdpynnjudwl1h6ugmc47-mysql.services.clever-cloud.com',
    user: 'urqnauyuphr5vjig',
    password: 'aaXSNHjePyL8tunxRuPu',
    database: 'bdpynnjudwl1h6ugmc47'
};
const pool = mysql.createPool({
    connectionLimit: 10,
    ...credentials
});

app.post('/logins', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM logins WHERE username = ? AND password = ?';
    pool.query(query, [username, password], (err, result) => {
        if (err) {
            console.error('Error en la consulta SQL:', err);
            res.status(500).send('Error en la base de datos');
        } else {
            if (result.length > 0) {
                res.status(200).send(result[0]);
            } else {
                res.status(400).send('Usuario no existe');
            }
        }
    });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

(async () => {
    try {
        await db.authenticate();
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    }
})();
