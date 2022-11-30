const mongoose = require('mongoose');
function validateId(req, res, next) {
    var valid = mongoose.Types.ObjectId.isValid(req.params.id);
    if(!valid){
        return res.json({'message': 'Error'});
    }
    next();
}
module.exports = validateId;

//Esto lo hago para que, al momento de testear al menos, no me crashee la el servidor cada vez que falla