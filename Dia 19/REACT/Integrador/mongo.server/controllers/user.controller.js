const User = require('../models/user.model');


const getUser = async (req, res) => {
    const user = await User.find();
    res.status(201).json(user);
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    User.findById(id).then((data) => {
        res.json(data);
    }).catch(() => {
        res.status(404).json("USER not found ...");
    })
}

const createUser = async (req, res) =>{
    const user = new User(req.body)
    user.save()
        .then(() =>res.json(user))
        .catch((err)=> res.json("Faltan datos ..."));
}

const updateUser = async (req, res) =>{
    const { id } = req.params;
    await User.updateOne({_id : id}, req.body);
    res.json("Usuario actualizado ...");
 
}

const deleteUser = async (req, res) =>{
    const { id } = req.params;
    await User.remove({_id : id});
    res.json("Usuario eliminado ...");
}

module.exports = {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}