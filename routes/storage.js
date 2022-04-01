const express = require("express");
const router = express.Router()
const { createItems } = require("../controllers/storage");
const uploadMiddleware =require("../utils/handleStorage")


router.post("/",uploadMiddleware.single("myfile"),createItems)

module.exports = router