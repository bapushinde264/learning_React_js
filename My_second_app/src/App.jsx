// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
//import '/About.jsx'
// import '/Home.jsx'
 import Header from './components/Header.jsx';
 import Home from './components/Home';
import About from './components/About';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';


function App() {
  

  return (
    <>
  
     <Header/>
     <Home/>
     <About/>
     <Services/>
     <Contact/>
     <Footer/>
    
                  
    </>
  )
}

export default App
