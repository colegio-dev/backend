import express from "express";
import { createNovedad, deleteNovedad, getAllNovedad, getNovedad, updateNovedad } from "../controllers/Controllers.js";



const routes = express.Router()

routes.get('/', getAllNovedad)
routes.get('/:id', getNovedad)
routes.post('/', createNovedad)
routes.put('/:id', updateNovedad)
routes.delete('/:id', deleteNovedad)


export default routes;