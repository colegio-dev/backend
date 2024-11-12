import express from "express";

import { getAllUsers, getUser, updateUser, createUser, deleteUser } from "../controllers/ControllersUser.js";

const routesUsers = express.Router()

routesUsers.get('/', getAllUsers)
routesUsers.get('/:id', getUser)
routesUsers.post('/', createUser)
routesUsers.put('/:id', updateUser)
routesUsers.delete('/:id', deleteUser)

export default routesUsers;
