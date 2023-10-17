import React from "react";
import Navbar from "../../Components/navbar/nav";
import Footer from "../../Components/footer/foter";
import { useNavigate } from "react-router-dom";
function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div>
    <Navbar />
  
    <Footer />
  </div>
  );
}

export default AdminDashboard;
