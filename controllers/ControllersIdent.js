
import identModel from '../models/ModelsIdent.js'

export const getAllIdent = async (req, res) => {
    try{
        const identificaciones = await identModel.findAll()
        res.json(identificaciones)
    } catch (error){
        res.json({message: error.message})
    }
}


export const getIdent = async (req, res) => {
    try {
        const identificacion = await identModel.findAll({
            where:{id:req.params.id}
        })
        res.json(identificacion[0])
    } catch (error){
        res.json({message: error.message})
    }
}

export const createIdent = async (req, res) => {
    try{
        await identModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error){
        res.json({message: error.message})
    }
}

export const updateIdent = async (req, res) => {
    try{
        await identModel.update(req.body,{
            where:{id: req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }catch (error){
        res.json({message: error.message})
    }
}

export const deleteIdent = async(req, res) => {
    try{
        await identModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    }catch (error){
        res.json({message: error.message})
    }
}