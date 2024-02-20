//importamos el modelo
import novedadModel from "../models/Models.js";

//metodos para el CRUD

//traer todos los registros
export const getAllNovedad = async (req, res) => {
    try {
        const novedades = await novedadModel.findAll()
        res.json(novedades)
    } catch (error) {
        res.json ( {message: error.message} )
    }
}
//traer un registro
export const getNovedad = async (req, res) => {
    try {
        const novedad = await novedadModel.findAll({
            where:{id:req.params.id}
        })
        res.json(novedad[0])
    } catch (error) {
        res.json ( {message: error.message} )
    }
}
//crear un registro
export const createNovedad = async (req, res) => {
    try {
        await novedadModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json ( {message: error.message} )
    }
}
//actualizar registro
export const updateNovedad = async (req, res) => {
    try {
        await novedadModel.update(req.body, {
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
export const deleteNovedad = async(req, res) => {
    try {
        await novedadModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json ( {message: error.message} )
    }
}