import express from 'express'

import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/ControllersUsers.js';

const routesUser = express.Router()

routesUser.get('/', getAllUsers)
routesUser.get('/:id', getUser)
routesUser.post('/', createUser)
routesUser.put('/:id', updateUser)
routesUser.delete('/:id', deleteUser)

export default routesUser

