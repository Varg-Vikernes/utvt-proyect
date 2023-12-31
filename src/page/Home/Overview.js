// frontend/src/Dashboard.jsx
import React from 'react'
import Navbar from '../../Components/navbar/nav'
import Home from '../../Components/home/home'
import Footer from '../../Components/footer/foter'
import RecipeList from '../../Components/home/recipes/RecipeList'
// import ProductPage from "../../Components/home/AboutProuct/productpage";
import MapLocation from '../../Components/home/Locate/mapLocation'
import Blog from '../../Components/home/Blog/BlogContainer'
import ComeAbout from '../../Components/home/AboutProuct/ComeAbout'
import VideoProduct from '../../Components/home/AboutProuct/videoProduct'
function Dashboard() {
    return (
        <div>
            <Navbar />
            <Home />
            <ComeAbout />
            <VideoProduct src="assets/home/videos/q-spicy.mp4" />
            <RecipeList />
            <MapLocation />
            <Blog />
            <Footer />
        </div>
    )
}

export default Dashboard
