import React from 'react';
import './App.css';
import React, { useState } from 'react';
const axios = require('axios');

const App = () => {
  const [book, setbook] = useState(0);
  const [title, setbook] = useState("");
  const [author, setbook] = useState("");
  const [pages, setbook] = useState("");
  const [pages, setbook] = useState("");

  const getbook =()=>{
  axios.get(`http://localhost:5000/books`)
  .then(function (response) {
   
    setbook(response.data)
  })
  .catch(function (error) {
    
    console.log(error);
  })
}
  const getbook =()=>{
  axios.get(`http://localhost:5000/library`,{

  })
  .then(function (response) {
   
    setbook(response.data)
  })
  .catch(function (error) {
    
    console.log(error);
  })
}
  const library =()=>{
  axios.get(`http://localhost:5000/library`,{
    title:title,
    author:author,
  })
  .then(function (response) {
   
    setbook(response.data)
  })
  .catch(function (error) {
    
    console.log(error);
  })
}
  const library =()=>{
  axios.get(`http://localhost:5000/library${id}`)
  .then(function (response) {
   
    setbook(response.data)
  })
  .catch(function (error) {
    
    console.log(error);
  })
}
  return (
    <form onClick={getbook}>
    <div>
         <button>save</button>
    </div>
    </form>
  )
}
export default App;