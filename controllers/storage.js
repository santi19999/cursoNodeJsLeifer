const {storageModel} = require("../models")
const URL_PULIC = process.env.URL_PUBLIC;
/**
 * Obtener lista de la Base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req,res) =>{
    const data = await storageModel.find({})
    res.send({data})
}

/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req,res) =>{}

/**
 * Crear un Registro
 * @param {*} req 
 * @param {*} res 
 */
const createItems = async (req,res) =>{
    const {body,file} = req;
    const fileData = {
        filename: file.filename,
        url:`${URL_PULIC}/${file.filename}`
    }
   const data= await storageModel.create(fileData)
   res.send({data})
}

/**
 * Actualizar un Registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItems = (req,res) =>{}

/**
 * Eliminar un Registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItems = (req,res) =>{}


module.exports = {getItems,getItem,createItems,updateItems,deleteItems}