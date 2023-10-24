import React, { useState } from "react";
import SideBarComponent from "../../Components/admin/SideBarComponent";
import Usuarios from "../../Components/admin/User/Usuarios";
import Recetas from "../../Components/admin/Recipes/Recetas";
import Blog from "../../Components/admin/Blog/BlogAdmin";
import NavbarAdmin from "../../Components/navbar/navAdmin";
import { formStyles, responsiveFormStyles } from "../../styles/Constants";

function AdminHome() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div >
    <NavbarAdmin />
    <div className="flex items-center justify-center min-h-screen">
      <SideBarComponent handleOptionSelect={handleOptionSelect} />

     <div className={responsiveFormStyles.container}>
        {selectedOption === "recetas" && <Recetas />}
        {selectedOption === "usuarios" && <Usuarios />}
        {selectedOption === "blog" && <Blog />}
      </div>
    </div>
  </div>
 
  );

  
}

export default AdminHome;
