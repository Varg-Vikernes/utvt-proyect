// frontend/src/Dashboard.jsx
import React from "react";
import Navbar from "../../Components/navbar/nav";
import Home from "../../Components/home/home";
import Footer from "../../Components/footer/foter";
<<<<<<< HEAD
import Cards from "../../Components/cards/Cards";
import ProductPage from "../../Components/AboutProuct/productpage";
import ComeAbout from "../../Components/AboutProuct/ComeAbout";
import VideoProduct from "../../Components/AboutProuct/videoProduct";
import Blog from "../../Components/blog/blog";

=======
import RecipeCards from "../../Components/home/recipes/RecipeCards";
import ProductPage from "../../Components/home/AboutProuct/productpage";
import Map from "../../Components/home/Locate/Map";
import Blog from "../../Components/home/Blog/Blog";
import ComeAbout from "../../Components/home/AboutProuct/ComeAbout";
import VideoProduct from "../../Components/home/AboutProuct/videoProduct";
import SocialNetwork from "../../Components/navbar/socialNetwork";
>>>>>>> c0774fcbf3e35bcd0b7a852f152a892feb0f6179
function Dashboard() {
  return (
    <div>
      <Navbar />
      <Home />
      <ComeAbout />
      <VideoProduct />
<<<<<<< HEAD
      <Cards />
      {/*AQUI VA LA UBICACION */}
=======
      <RecipeCards />
      <Map />
>>>>>>> c0774fcbf3e35bcd0b7a852f152a892feb0f6179
      <Blog />
      <Footer />
    </div>
  );
}

export default Dashboard;
