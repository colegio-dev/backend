import express from "express"
import {createIdent, deleteIdent, getAllIdent, getIdent, updateIdent} from "../controllers/ControllersIdent.js";

const routesIdent = express.Router()

routesIdent.get('/', getAllIdent)
routesIdent.get('/:id', getIdent)
routesIdent.post('/', createIdent)
routesIdent.put('/:id', updateIdent)
routesIdent.delete('/:id', deleteIdent)

export default routesIdent