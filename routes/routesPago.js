import express from "express"

import { getAllPagos, getPago, createPago, updatePago, deletePago } from "../controllers/ControllersPago.js";

const routesPagos = express.Router()

routesPagos.get('/', getAllPagos)
routesPagos.get('/:id', getPago)
routesPagos.post('/', createPago)
routesPagos.put('/:id', updatePago)
routesPagos.delete('/:id', deletePago)

export default routesPagos;