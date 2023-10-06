// frontend/src/Dashboard.jsx
import React from "react";
import Navbar from "../../Components/navbar/nav";
import Home from "../../Components/home/home";
import Footer from "../../Components/footer/foter";
import Cards from "../../Components/cards/Cards";
import ProductPage from "../../Components/AboutProuct/productpage";
import ComeAbout from "../../Components/AboutProuct/ComeAbout";
import VideoProduct from "../../Components/AboutProuct/videoProduct";
import SocialNetwork from "../../Components/navbar/socialNetwork";
function Dashboard() {
  return (
    <div>
      <Navbar />
      <SocialNetwork />
      <Home />
      <ComeAbout />
      <VideoProduct />
      <Cards />
      <Footer />
    </div>
  );
}

export default Dashboard;
