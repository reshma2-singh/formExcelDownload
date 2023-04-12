import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import {CSVLink} from "react-csv"
const obj = {
  inner: {
    marginLeft: "25%",
    marginRight: "25%",
    marginTop: "2%",
    boxShadow: " 10px 10px 8px #888888",
    padding: "25px",
    borderRadius: "5px"
  },
  table:{
  
    
    marginTop: "2%",
  }
}
const getItem = () => {
  const getVal = localStorage.getItem("show")
  if (getVal) {
    return JSON.parse(getVal)
  } else {
    return []
  }

}
function Dashboard() {
  const [data, setData] = useState({ fname: "", lname: "",phone:"",date:"",val:"" });
  
  const [show, setShow] = useState(getItem())
  const navigate = useNavigate()
 console.log(show,0)
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    })
  }
  const onSubmit=(e)=>{
    e.preventDefault()
    setShow([...show,data])
    setData({ fname: "", lname: "", phone: "", date: "", val: "" })
  
  }
 
useEffect(()=>{
localStorage.setItem("show",JSON.stringify(show))
}, [show])
  const handleDelete =(id)=>{
const task=show.filter((item,index)=>index!=id)
setShow(task)
  }
  const logout=()=>{
    localStorage.clear()
    navigate("/")
  }
  return (
    <>
      <button onClick={logout} style={{ marginTop: "15px", marginLeft: "10px", background:"#24a0ed",color:"white",border:"none",borderRadius:"5px",padding:"10px 10px",cursor:"pointer"}}>Log out</button>
    <Form style={obj.inner}>
      <h1 style={{ color: "blueviolet", textAlign: "center", fontWeight: "bold" }}>Form</h1>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First name" name="fname" value={data.fname} onChange={handleChange} />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last name" name="lname" value={data.lname} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter your phone number" name="phone" value={data.phone} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Enter date" name="date" value={data.date} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Choose </Form.Label>
          <select name="val" value={data.val} onChange={handleChange}>
          <option disabled value="0">Choose</option>
          <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </Form>
     <div>
        <CSVLink data={show} style={{ background:"#008000",color:"white",padding:"8px",textDecoration:"none",borderRadius:"5px",marginLeft:"9px",cursor:"pointer"}}>Export User Data</CSVLink>
        <Table striped="columns" style={obj.table}>
          <thead>
            <tr>
              <th>Sr no.</th>
              <th>Date</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>

              <th>Category</th>
            </tr>
          </thead>
      {
        show.map((item,index)=>{
          return (
            <tbody>
              <tr>
                <td>{index+1}</td>
                <td>{item.date}</td>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.phone}</td>
                <td>{item.val}</td>
                <button onClick={()=>handleDelete(index)} style={{background:"red",borderRadius:"5px",color:"white",border:"none"}}>delete</button>
              </tr>
             
            </tbody>
         
)
        })
      }
        </Table>
     </div>
    </>
  )
}

export default Dashboard
