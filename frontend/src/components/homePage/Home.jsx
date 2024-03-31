import React from 'react';
import Navbar from '../../utility/Navbar';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Services from './Services';
import Footer from '../../utility/Footer';

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Services></Services>
      <Footer></Footer>
    </>
  );
}
