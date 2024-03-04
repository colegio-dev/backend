import express from 'express'

import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/ControllersUsers.js';

const routesUser = express.Router()

routes.get('/', getAllUsers)
routes.get('/:id', getUser)
routes.post('/', createUser)
routes.put('/:id', updateUser)
routes.delete('/:id', deleteUser)

export default routesUser

