import express from "express";
import cors from "cors";
import db from "./database/db.js";
import routes from "./routes/routes.js";
import routesIdent from './routes/routesIdent.js';
import routesUsers from './routes/routesUsers.js' 
import mysql from 'mysql'



const app = express()


app.use(cors()) 
app.use(express.json())
app.use('/novedades', routes)
app.use('/identificaciones', routesIdent)
app.use ('/usuarios', routesUsers) 


const corsOptions = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE, PATCH, OPTIONS',
    "Access-Control-Allow-Headers": 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
  };
  
app.use(cors(corsOptions));
 

/* const credentials = {   
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'novedadesgenerales'
} */  

const credentials = {
    host: 'bdpynnjudwl1h6ugmc47-mysql.services.clever-cloud.com',
    user: 'urqnauyuphr5vjig',
    password: 'aaXSNHjePyL8tunxRuPu',
    database: 'bdpynnjudwl1h6ugmc47'
}  


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

 
//usado en primera version
app.post('/login', async (req, res) => {
    const {username, password} = req.body
     const values = [username, password] 
     var connection = mysql.createConnection(credentials)
     connection.query('SELECT * FROM login WHERE username = ? AND password = ? ', values, (err, result)=> {
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
 