/* const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({limit: '10mb'}))


const credentials = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'novedadesgenerales'
}

app.get('/', (req, res)=>{
    res.send('hola')
})

app.post('/login', (req, res) => {
    const {username, password} = req.body
    const values = [username, password]
    var connection = mysql.createConnection(credentials)
    connection.query('SELECT * FROM login WHERE username = ? AND password = ?', values, (err, result)=> {
        if(err){
            res.status(500).send(err)
        }else{
            if(result.length>0){
                res.status(200).send(result(0))
            }else{
                res.status(400).send('usuario no existe')
            }
        }
    })
    connection.end()
}) */