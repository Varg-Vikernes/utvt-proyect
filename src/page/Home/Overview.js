// frontend/src/Dashboard.jsx
import React from "react";
import Navbar from '../../Components/navbar/nav';
import Home from '../../Components/home/home';
import Footer from '../../Components/footer/foter';
import Cards from "../../Components/cards/Cards";
import ProductPage from "../../Components/AboutProuct/productpage";
import DescriptionProduct from "../../Components/AboutProuct/descriptionProduct";
import DescriptionProductRight from "../../Components/AboutProuct/descriptionProductRight";
function Dashboard() {
  return (
    <div>
      <Navbar />
      <Home />
      <DescriptionProduct /> {/* descricion producto izquiera */}
      <DescriptionProductRight />{/* descricion producto derecha */}
      <ProductPage />
      <Cards />

      <Footer />

    </div>
  );
}

export default Dashboard;
