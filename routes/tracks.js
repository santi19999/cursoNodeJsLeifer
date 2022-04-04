const express = require("express");
const { getItems, createItems, getItem, updateItems, deleteItems } = require("../controllers/traks");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const router = express.Router();

/**
 * Lista los items
 */
router.get("/",getItems)

/**
 * Obtener el detalle del item
 */
 router.get("/:id",validatorGetItem,getItem)


/**
 * Crear un Registro
 */

router.post("/",validatorCreateItem,createItems)

/**
 * Actualizar un Registro
 */
router.put("/:id",validatorGetItem,validatorCreateItem,updateItems)



/**
 * Eliminar un Registro
 */

router.delete("/:id",validatorGetItem,deleteItems)

module.exports= router