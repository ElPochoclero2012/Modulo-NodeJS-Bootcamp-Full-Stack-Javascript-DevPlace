import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

function Register() {

  
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    
    if(e.target.name == "image"){
      value = e.target.files;
    }
    setInputs(values => ({...values, [name]: value}))
  }

    const handleSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData();

      formData.append("username", inputs.username);
      formData.append("email", inputs.email);
      if(inputs.image){
        formData.append("image", inputs.image[0]);
      }
      formData.append("password", inputs.password);
      
      fetch('http://localhost:5050/user',{
        method:'POST',
        body: formData,
      }).then((res) => 
        res.json() 
      ).then(data => console.log(data))
      .catch((err) => console.log(err))
    }

  return (

    <Form className="RegisterForm" onSubmit={handleSubmit}>

        <p className="Title">Not a member? </p><p className="Title">Sign up!</p>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" value={inputs.username || ""} onChange={handleChange} placeholder="Enter username" required/>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={inputs.email || ""} onChange={handleChange} placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={inputs.password || ""} onChange={handleChange}  placeholder="Password" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" name="image" onChange={handleChange} />
      </Form.Group>
      
      <Button variant="success" type="submit" className="SignUpButton">
        Sign up
      </Button>
      
      </Form>
  )
}

export default Register