import React, { useReducer, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const initialState = {
  imagen: "",
  nombre: "",
  descripcion: "",
  precio: "",
};



const reducer = (state, action) => {
  switch (action.type) {
    case "CH_NOMBRE": {
      return {
        ...state,
        nombre: action.value,
      };
    }
    case "CH_DESCRIPCION": {
      return {
        ...state,
        descripcion: action.value,
      };
    }
    case "CH_PRECIO": {
      return {
        ...state,
        precio: action.value,
      };
    }
    case "CH_IMAGEN": {
      return {
        ...state,
        imagen: action.value,
      };
    }
  }
  return state;
};

function AddProduct() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    const url = "http://localhost:5050/v0/mysql/product";
    const formData = new FormData();
    formData.append("image",file);
    const config = {
      Headers:{
       'content-type': 'multipart/form-data', 
      }
    };
    axios.post(url, formData, config).then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    })
  };
  const [file, setFile] = useState(); 

  function handleFileChange(event){
    setFile(event.target.files[0]);
  }

  return (
    <div className="containerCards">
      <div className="Cards">
        <form
          name="form"
          method="post"
          action="/send.php"
          enctype="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <label htmlFor="">Seleccione imagen del producto </label>
          <input
            type="file"
            name="adjunto"
            accept=".jpg,.png"
            onChange={handleFileChange}
          />

          <div className="card">
            <label htmlFor="">Ingrese nombre del producto</label>
            <input
              type="text"
              name="producto"
              value={state.nombre}
              onChange={(event) =>
                dispatch({ type: "CH_NOMBRE", value: event.target.value })
              }
            />
            <label htmlFor="">Ingrese descripcion del producto</label>
            <input
              type="text"
              name="descripcion"
              value={state.descripcion}
              onChange={(event) =>
                dispatch({ type: "CH_DESCRIPCION", value: event.target.value })
              }
            />
            <label>Ingrese Precio del producto</label>
            <input
              type="number"
              name="precio"
              value={state.precio}
              onChange={(event) =>
                dispatch({ type: "CH_PRECIO", value: event.target.value })
              }
            />
            <button type="submit">Mandar</button>
          </div>
        </form>
      </div>

      <div>
        <CardGroup className="Cards">
          <Card.Body>
            <Card.Img
              className="imagen-card"
              src="https://t3.ftcdn.net/jpg/02/15/15/46/360_F_215154625_hJg9QkfWH9Cu6LCTUc8TiuV6jQSI0C5X.jpg"
            />
            <Card.Title>{state.nombre}</Card.Title>
            <Card.Text>{state.descripcion}</Card.Text>
            <small className="text-muted">${state.precio}</small>
            <Card.Footer>
              <button type="button" className="submit">
                Vender
              </button>
            </Card.Footer>
          </Card.Body>
        </CardGroup>
      </div>
    </div>
  );
}


export default AddProduct