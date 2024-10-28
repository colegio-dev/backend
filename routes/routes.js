import express from "express";
import { createAlumno, getAllAlumnos, getAlumno, updateAlumno, deleteAlumno } from '../controllers/Controllers.js'

const routesAlumnos = express.Router()

routesAlumnos.get('/', getAllAlumnos)
routesAlumnos.get('/:id', getAlumno)
routesAlumnos.post('/', createAlumno)
routesAlumnos.put('/:id', updateAlumno)
routesAlumnos.delete('/:id', deleteAlumno)

export default routesAlumnos;
