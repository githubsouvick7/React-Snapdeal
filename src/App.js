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
// fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products')
// .then(res => res.json())
// .then(data => console.log(data));
