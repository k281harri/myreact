import { createRoot } from 'react-dom/client';
import './styles.css'; // Import the CSS file for styling
import Contact from './components/Contact'; // Import the Contact component
import { BrowserRouter, Routes, Route, Switch, link } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';






//link reccommended in vscode
{/* <Link to="/dashboard">Dashboard</Link>;
<Link
  to={{
    pathname: "/some/path",
    search: "?query=string",
    hash: "#hash",
  }}
/> */}





// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

function Main() {
    useEffect(() => {
        // Perform side effects here, such as fetching data or manipulating the DOM
        console.log('Main component has been rendered');
      }, []); // Empty dependency array means this effect runs once after the initial render
    

      


  return (
    <div className="main-container">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="components/About.html">About</a></li>
        
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section className="header-section">
        <h1>Vegan Bar</h1>
      </section>
      <section className="content-section">
        <p>Welcome to the Vegan Bar. Enjoy our delicious plant-based meals!</p>
      </section>
    </div>
  );
}
// Create a root and render the Main component
const appRoot = createRoot(document.getElementById('app'));
appRoot.render(


<Main />);

// added a contact route to the app
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>





