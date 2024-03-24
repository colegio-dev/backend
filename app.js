import express from "express";
import cors from "cors";
import db from "./database/db.js";
import routes from "./routes/routes.js";
import mysql from 'mysql'


const app = express()



/* app.use(cors(
    config.aplication.cors.server
))  */
app.use(express.json())
app.use('/novedades', routes)

/* const config = {
    aplication: {
        cors: {
            server: [
                {
                    origin: ('*'),
                    credentials: true
                }
            ]
        }
    }
} */


/* const credentials = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'novedadesgenerales'
} */ 

const credentials = {
    host: 'benlvzvkhno5tql1tp7x-mysql.services.clever-cloud.com',
    user: 'ux05ys8xc3hyetfw',
    password: '6LdGdPDqajTO4yC1Afrd',
    database: 'benlvzvkhno5tql1tp7x'
}


try{
    await db.authenticate()
    console-log('conexion exitosa a la DB')
} catch (error) {
    console.log(`El error de conexion es:${error}`)
}

app.listen(8000, () => {
    /* console.log("Server UP running in http://localhost:8000/") */
    console.log('server run in clevercloud')
});

app.post('/login', (req, res) => {
    const {username, password} = req.body
    const values = [username, password]
    var connection = mysql.createConnection(credentials)
    connection.query('SELECT * FROM login WHERE username = ? AND password = ?', values, (err, result)=> {
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