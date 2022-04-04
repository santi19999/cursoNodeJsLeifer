const { matchedData } = require("express-validator")
const { tracksModel } = require("../models")
const { handleHttpError } = require("../utils/handleErrors")
/**
 * Listar los Items
 * Si algo sale mal va por el catch y utiliza handleHttpError para mostrar el error (utils)
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({})
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEMS')
    }
}

/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        req = matchedData(req)
        const { id } = req
        const data = await tracksModel.findById(id)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEM')
    }
}

/**
 * Crear un Registro
 * @function handleHttpError Si hay un error, es la encargada de responder un status code y el error específico.
 * @param {*} req 
 * @param {*} res 
 * @function  matchedData Limpia el objeto ingresado, deja sólo los elementos que cumplan con las validaciones. (si vienen datos demás no los tiene en cuenta)
 */
const createItems = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await tracksModel.create(body)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'ERROR_CREATE_ITEMS')
    }
}

/**
 * Actualizar un Registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItems = async (req, res) => { 
    try {
        const {id, ...body}= matchedData(req);
        const data=await tracksModel.findOneAndUpdate(id,body);
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR_UPDATE_ITEMS")
    }
}

/**
 * Eliminar un Registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItems = async (req, res) => {
    try {
        req = matchedData(req)
        const { id } = req
        console.log(id)
        const data = await tracksModel.deleteOne({_id:id})
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR_DELETE_ITEMS")
    }
 }


module.exports = { getItems, getItem, createItems, updateItems, deleteItems }