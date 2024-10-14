import React from 'react'
import FlashSale from './Components/FlashSale/FlashSale'
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import ContactUs from "./Pages/ContactUs/ContactUs"
import Footer from './Components/Footer/Footer';
const App = () => {
   const [itemCount, setItemCount] = useState(3); // Example item count
  return (
  <div>
    <FlashSale/>
      <Router>
        <Navbar
        itemCount={itemCount}
        />

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contactus" element={<ContactUs />} />
              {/* Add other routes here as needed */}
          </Routes>
      </Router>
      <Footer/>
      </div>
  );
}
export default App
