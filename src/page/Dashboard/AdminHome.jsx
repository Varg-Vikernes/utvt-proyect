import React, { useState } from "react";
import { FaRegUser, FaUtensils, FaBlog } from "react-icons/fa";
import SideBarComponent from "../../Components/admin/SideBarComponent";
import Usuarios from "../../Components/admin/User/Usuarios";
import Recetas from "../../Components/admin/Recipes/Recetas";
import Blog from "../../Components/admin/Blog/BlogAdmin";
import NavBarAdmin from "../../Components/admin/NavBarAdmin";

function AdminHome() {
  const [selectedOption, setSelectedOption] = useState("usuarios");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <NavBarAdmin />
      <div className="flex bg-gray-800">
        <SideBarComponent handleOptionSelect={handleOptionSelect} />
        <div className="flex-1 ml-64 p-8 bg-slate-300">
          {selectedOption === "recetas" && <Recetas />}
          {selectedOption === "usuarios" && <Usuarios />}
          {selectedOption === "blog" && <Blog />}
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
