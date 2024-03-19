import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './components/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Technology from './components/Technology';
import Colleges from './components/Colleges';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClientsPage from './components/Clients';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation/>
    <Homepage/>
    <About/>
    <Team/>
    <Services/>
    <Technology/>
    <Colleges/>
    <ClientsPage/>
    <Contact/>
    <Footer/>
  </React.StrictMode>
)