const express = require("express")
require("dotenv").config()
const cors = require("cors")
const dbConnect = require("./config/mongo")
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('storage'))
const port = process.env.PORT || 5000



app.get(("/"),(req,res)=>{
    res.send("<h1>Bienvenido a Express</h1>")
})
//Aquí invocamos a las rutas
app.use("/api",require("./routes"))


app.listen(port,()=>console.log("Servidor funcionando Correctamente"))

dbConnect();