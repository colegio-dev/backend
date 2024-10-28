//importamos el modelo
import alumnoModel from "../models/Models.js"

//metodos para el CRUD

//traer todos los registros
export const getAllAlumnos = async (req, res) => {
    try {
        const alumnos = await alumnoModel.findAll()
        res.json(alumnos)
    } catch (error) {
        res.json ( {message: error.message} )
    }
}
//traer un registro
export const getAlumno = async (req, res) => {
    try {
        const alumno = await alumnoModel.findAll({
            where:{id:req.params.id}
        })
        res.json(alumno[0])
    } catch (error) {
        res.json ( {message: error.message} )
    }
}
//crear un registro
export const createAlumno = async (req, res) => {
    try {
        await alumnoModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json ( {message: error.message} )
    }
}
//actualizar registro
export const updateAlumno = async (req, res) => {
    try {
        await alumnoModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message": "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json ( {message: error.message} )
    }
}
//eliminar registro
export const deleteAlumno = async(req, res) => {
    try {
        await alumnoModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json ( {message: error.message} )
    }
}
