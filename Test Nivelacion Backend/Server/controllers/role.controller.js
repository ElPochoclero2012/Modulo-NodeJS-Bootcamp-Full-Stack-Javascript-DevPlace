const { Role } = require('../models/role.model');

const getRole = async (req, res) => {
    const response = await Role.findAll().then((data) => {
        const res = { error: false, data: data }
        return res;
    }).catch(error => {
        const res = { error: true, message: error }
        return res;
    });
    res.json(response);
}

const createRole = async (req, res) => {
    try {
      
        const modelData = {
            name: req.body.name
        }
        const response = await Role.create(modelData)
            .then((data) => {
                const res = { error: false, data: data, message: "Role Create" }
                return res;
            }).catch(error => {
                const res = { error: true, message: error }
                return res;
            });
        res.json(response);
    } catch (e) {
        console.log(e)
    }
}


const getByIdRole = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Role.findAll({
            where: { id: id }
        }).then((data) => {
            const res = { error: false, data: data }
            return res;
        }).catch(error => {
            const res = { error: true, message: error }
            return res;
        });
        res.json(response);
    } catch (e) {
        console.log(e);
    }
}

const updateRole = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Role.update(req.body, {
            where: { id: id }
        }).then((data) => {
            const res = { error: false, data: data, message: "Role Update" }
            return res;
        }).catch(error => {
            const res = { error: true, message: error }
            return res;
        });
        res.json(response);
    } catch (e) {
        console.log(e)
    }
}

const deleteRole = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await Role.destroy({
            where: { id: id }
        }).then((data) => {
            const res = { error: false, data: data, message: "Deleted Successful" }
            return res;
        }).catch(error => {
            const res = { error: true, message: error }
            return res;
        });
        res.json(response);
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    getRole,
    createRole,
    getByIdRole,
    updateRole,
    deleteRole
}