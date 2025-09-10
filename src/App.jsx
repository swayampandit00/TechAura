import './App.css'

import { Navigation } from './Components/Navigation'
import { default as JsonData } from "./data/data.json";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Features } from './Components/Features';
import { Gallery } from './Components/Gallery';
import { Testimonials } from './Components/Testimonials';
import { Team } from './Components/Team';
import { Services } from './Components/Services';
import  {Register}  from './LoginAuth/Register.jsx';
import  {Login}  from './LoginAuth/Login.jsx';
import  {Service}  from './LoginAuth/Service.jsx';
import  {Error}  from './LoginAuth/Error.jsx';






function App() {


  const [pageData, setPageData] = useState({});//pageData== vetor, 
  // setPageData == funcão para carregar o vetor

  useEffect(() => {//recebe como primeiro parâmetro uma função 
    // que será executada assim que o componente renderizar.
    setPageData(JsonData);
  }, []);

  return (

    <BrowserRouter>

      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Features />
            <Services />
            <About />
            <Gallery />
            <Testimonials />
            <Team />
            <Contact />
          </>
        } />
        <Route path="/about" element={
          <>
            <About />
            <Gallery />
          </>
        } />
        <Route path="/testimonials" element={
          <>
            <Testimonials />
            <Team />
          </>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<Error />} />

      </Routes>

    </BrowserRouter>

  )
}

export default App



