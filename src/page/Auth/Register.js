import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/navbar/nav";
import Footer from "../../Components/footer/foter";
import RegisterForm from "../../Components/auth/RegisterForm";
import BackgroundImage from "../../Components/auth/BackgroundImage";

function Register() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <BackgroundImage />
        <RegisterForm />
      </div>
      <Footer />
    </div>
  );
}

export default Register;
