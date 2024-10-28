
import pagosModel from '../models/ModelsPago.js'

export const getAllPagos = async (req, res) => {
    try{
        const pagos = await pagosModel.findAll()
        res.json(pagos)
    } catch (error){
        res.json({message: error.message})
    }
}


export const getPago = async (req, res) => {
    try {
        const pago = await pagosModel.findAll({
            where:{id:req.params.id}
        })
        res.json(identificacion[0])
    } catch (error){
        res.json({message: error.message})
    }
}

export const createPago = async (req, res) => {
    try{
        await pagosModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error){
        res.json({message: error.message})
    }
}

export const updatePago = async (req, res) => {
    try{
        await pagosModel.update(req.body,{
            where:{id: req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }catch (error){
        res.json({message: error.message})
    }
}

export const deletePago = async(req, res) => {
    try{
        await pagosModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    }catch (error){
        res.json({message: error.message})
    }
}