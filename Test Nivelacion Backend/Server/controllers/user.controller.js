var { Users } = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getUser = async (req, res) => {
  const response = await Users.findAll()
    .then((data) => {
      const res = { error: false, data: data };
      return res;
    })
    .catch((error) => {
      const res = { error: true, message: error };
      return res;
    });
  res.json(response);
};

const createUser = async (req, res) => {
  try {
    let urlImage;
    let rol = 1;
    if (req.file === undefined){
      urlImage = null
    }else{
      const url = req.protocol + '://' + req.get('host')
      urlImage = url + '/upload/' + req.file.filename;
      rol = 2;
    }
    const modelData = {
      username: req.body.username,
      email: req.body.email,
      image: urlImage,
      role: rol,
      password: bcrypt.hashSync(req.body.password, 10)
    };

    console.log(req.body);
    const response = await Users.create(modelData)
      .then((data) => {
        const res = {
          error: false,
          data: data,
          message: "User has been created successfully...",
        };
        return res;
      })
      .catch((e) => {
        if(e.name=='SequelizeUniqueConstraintError' ||e.name=='SequelizeValidationError' ){ 
          return   { error: true, message: e.errors.map(err=>err.message) } 
        }
      else if(e.name=='SequelizeForeignKeyConstraintError'){
          return   { error: true, message:['The category does not exist']}
      }
      return { error: true, message: e } 
    });
      res.json(response);
    } catch (e) {
      console.log(e);
    }
};

const getByIdUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Users.findAll({
      where: { id: id },
    })
      .then((data) => {
        const res = { error: false, data: data };
        return res;
      })
      .catch((error) => {
        const res = { error: true, message: error };
        return res;
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Users.update(req.body, {
      where: { id: id },
    })
      .then((data) => {
        const res = {
          error: false,
          data: data,
          message: "Product has been updated successfully...",
        };
        return res;
      })
      .catch((error) => {
        const res = { error: true, message: error };
        return res;
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Users.destroy({
      where: { id: id },
    })
      .then((data) => {
        const res = {
          error: false,
          data: data,
          message: "Product has been deleted successfully...",
        };
        return res;
      })
      .catch((error) => {
        const res = { error: true, message: error };
        return res;
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};

const login = async (req, res) => {
  console.log(req.body)
  Users.findOne({
    where:{
      email:req.body.email
    }
  }).then( (user) => {
    if(!user){
      return res.status(401).send({message: "Error user not found"})
    }

    var passwordIsValid=bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid){
      return res.status(401).send({message:"Error user not found"})
    }

    var tokenAccess = jwt.sign({id:user.id}, process.env.SECRET, {
      expiresIn:86400
    });
    user.token=tokenAccess;
    res.status(200).send({
      user,
      tokenAccess
    })
  })
}

module.exports = {
    getUser,
    createUser,
    getByIdUser,
    updateUser,
    deleteUser,
    login
}