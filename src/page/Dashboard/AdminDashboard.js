import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../Components/navbar/nav";
import Footer from "../../Components/footer/foter";

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Error 404</h2>
          <p className="text-gray-600">La página que buscas no existe.</p>
          <Link
            to="/login"
            className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Ir a la página de inicio
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
