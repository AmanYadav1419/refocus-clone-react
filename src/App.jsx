import React from "react";
import NavBar from './components/NavBar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from "locomotive-scroll";
import './App.css'

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="max-w-screen-2xl bg-zinc-900 text-white font-['satoshi']">
      <NavBar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;