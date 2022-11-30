function validateRequest (req, res, next, schema){
    const options = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true
    };
    const { error, value } = schema.validate(req.body, options);
    if(error){
        console.log(error)
        res.status(400).json({message:`${error.details.map(x => x.message).join(', ')}`});
    } else {
        req.body = value;
        next(); //Por algún motivo que no llego con el tiempo a terminar de revisar, no me funciona el next, por lo que no puedo postear
    }
}

module.exports = validateRequest;