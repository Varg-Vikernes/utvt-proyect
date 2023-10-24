import React, { useState } from "react";
import SideBarComponent from "../../Components/admin/SideBarComponent";
import Usuarios from "../../Components/admin/User/Usuarios";
import Recetas from "../../Components/admin/Recipes/Recetas";
import Blog from "../../Components/admin/Blog/BlogAdmin";



function AdminHome() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div >
      
      <div className="admin-container">
        <SideBarComponent handleOptionSelect={handleOptionSelect} />

        <div className="admin-content">
          {selectedOption === "recetas" && <Recetas />}
          {selectedOption === "usuarios" && <Usuarios />}
          {selectedOption === "blog" && <Blog />}
        </div>
      </div>
    </div>

  );


}

export default AdminHome;
