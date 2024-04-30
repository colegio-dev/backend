import express from 'express'

import { getAllLogin, getLogin, updateLogin, createLogin, deleteLogin } from '../controllers/ControllersLogin.js';

const routesLogin = express.Router()

routesLogin.get('/', getAllLogin)
routesLogin.get('/:id', getLogin)
routesLogin.post('/', createLogin)
routesLogin.put('/:id', updateLogin)
routesLogin.delete('/:id', deleteLogin)

export default routesLogin

