/**
 * 
 * @param {*} res Recibe la función de respuesta, para poder responderle el código de error al ususario
 * @param {*} message Contiene el mensaje de error
 * @param {*} code Es el Status Code del error
 */
const handleHttpError = (res, message = "Algo sucedio", code=403)=>{
    res.status(code);
    res.send({error: message})
}


module.exports = {handleHttpError}