import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';


function AddProduct() {

    const [data, setData] = useState({
      name:'',
      image:'',
      price:0,
      category:1
    })

    const handleChange = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch('http://localhost:5050/product',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(data)
      }).then((res) => 
        res.json() 
      ).then(data => console.log(data))
      .catch((err) => console.log(err))

    }

  return(
    <>
    <Form className="AddProductForm" onSubmit={handleSubmit}>

    <p className="Title">Want to add a PRODUCT? </p><p className="Title">Complete this!</p>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleChange} placeholder="Enter a name" required/>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" name="price" onChange={handleChange} placeholder="Enter price" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCategory">
        <Form.Label>Category</Form.Label>
        <Form.Select name="category" id="category" onChange={handleChange}>
          <option>...</option>
          <option value={1}>Digital</option>
          <option value={2}>Physical</option>
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>Add a image</Form.Label>
        <Form.Control type="file" name="image" onChange={handleChange} placeholder="Add a image"></Form.Control> <br/>
      </Form.Group>


      
      <Button variant="success" type="submit" className="SubmitButton">
        Submit!
      </Button>

    </Form>
    </>
  )
}

export default AddProduct;
