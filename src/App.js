import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from './Components/Header/Header'
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'


const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
    </>
  )
}

export default App
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(data => console.log(data));
