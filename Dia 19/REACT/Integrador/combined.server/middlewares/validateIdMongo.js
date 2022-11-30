const mongoose = require('mongoose');
function validateIdMongo(req, res, next) {
    var valid = mongoose.Types.ObjectId.isValid(req.params.id);
    if (!valid) {
        return res.json({ 'message': 'Error' });
    }
    next();
}
module.exports = validateIdMongo;