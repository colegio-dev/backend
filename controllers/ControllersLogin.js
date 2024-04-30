import loginModel from "../models/ModelsLogin.js"


//metodos para el CRUD

//traer todos los registros
export const getAllLogin = async (req, res) => {
    try {
        const logins = await loginModel.findAll()
        res.json(logins)
    } catch (error) {
        res.json ( {message: error.message} )
        console.log(error);
    }
}


//traer un registro
export const getLogin = async (req, res) => {
    try {
        const login = await loginModel.findAll({
            where:{id:req.params.id}
        })
        res.json(login[0])
    } catch (error) {
        res.json ( {message: error.message} )

    }
}


//crear un registro
export const createLogin = async (req, res) => {
    try {
        await loginModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json ( {message: error.message} )
    }
}


//actualizar registro
export const updateLogin = async (req, res) => {
    try {
        await loginModel.update(req.body, {
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
export const deleteLogin = async(req, res) => {
    try {
        await loginModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json ( {message: error.message} )
    }
}