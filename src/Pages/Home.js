import React from "react";
import Navbar from "../components/Navbar";
import Benefit from "../components/Benefit";
import Testimonial from "../components/Testimonial";
import Hero from "../components/Hero";
import Ourproduct from "../components/Ourproduct";
import Bestoffer from "../components/Bestoffer";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";


const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Benefit />
      <Testimonial />
      <Ourproduct />
      <Bestoffer />
      <ContactUs />
      <Footer/>
      <Copyright />
    </div>
  );
};

export default Home;
