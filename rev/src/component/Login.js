import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
const obj={
    inner:{
        marginLeft:"30%",
        marginRight:"30%",
        marginTop:"9%",
        boxShadow:" 10px 10px 8px #888888",
        padding:"25px",
        borderRadius:"5px"
    }
}
function Login() {
    const[data,setData]= useState({email:"",password:""})
    const handleChange=(e)=>{
const value=e.target.value;
setData({
    ...data,
    [e.target.name]:value
})
    }
    const navigate = useNavigate()
    const onSubmit=()=>{
        localStorage.setItem("email",data.email)
        localStorage.setItem("password",data.password)
        navigate("/home")
    }
  return (
   
      <Form  style={obj.inner}>
        <h1 style={{color:"blueviolet",textAlign:"center",fontWeight:"bold"}}>Log In</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={data.email} onChange={handleChange}  />
             
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={data.password} onChange={handleChange} />
          </Form.Group>
         
          <Button variant="primary" type="submit" onClick={onSubmit}>
              Submit
          </Button>
      </Form>
  )
}

export default Login