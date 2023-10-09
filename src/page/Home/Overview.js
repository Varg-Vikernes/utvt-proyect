// frontend/src/Dashboard.jsx
import React from "react";
import Navbar from "../../Components/navbar/nav";
import Home from "../../Components/home/home";
import Footer from "../../Components/footer/foter";
import RecipeCards from "../../Components/home/recipes/RecipeCards";
import ProductPage from "../../Components/home/AboutProuct/productpage";
import Map from "../../Components/home/Locate/Map";
import Blog from "../../Components/home/Blog/Blog";
import ComeAbout from "../../Components/home/AboutProuct/ComeAbout";
import VideoProduct from "../../Components/home/AboutProuct/videoProduct";
import SocialNetwork from "../../Components/navbar/socialNetwork";
function Dashboard() {
  return (
    <div>
      <Navbar />
      <SocialNetwork />
      <Home />
      <ComeAbout />
      <VideoProduct />
      <RecipeCards />
      <Map />
      <Blog />
      <Footer />
    </div>
  );
}

export default Dashboard;
