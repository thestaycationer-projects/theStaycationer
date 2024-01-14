import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './header/Navbar';
import Card from './card/Card';
import Navbar1 from './header/Navbar1';
import Property from './card/Property';
import Home from './card/Home';
import Footer from './card/Footer';

;

 function App() {
  return (
    <>
    <Navbar/>
    <Home/>
     <Router>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/property/:cardId" element={<Property />} />
      </Routes>
    </Router>
    <Property/>
    <Footer/>
    
     
    </>
  )
}
export default App;