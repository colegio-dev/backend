import express from "express";
import cors from "cors";
import db from "./database/db.js";
import routes from "./routes/routes.js";

const app = express()

app.use(cors())
app.use(express.json())
app.use('/novedades', routes)

try{
    await db.authenticate()
    console-log('conexion exitosa a la DB')
} catch (error) {
    console.log(`El error de conexion es:${error}`)
}

/* app.get('/', (req,res) => {
    res.send("hola Mundo")
}) */

app.listen(8000, () => {
    console.log("Server UP running in http://localhost:8000/")
})