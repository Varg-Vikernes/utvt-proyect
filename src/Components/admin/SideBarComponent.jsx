import React from "react";
import {
  FaUsers,
  FaUtensils,
  FaBlog,
  FaUserPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import { logout } from "../../services/authentication/authUtils";

const SidebarItem = ({ label, onClick, icon }) => (
  <li>
    <a
      onClick={onClick}
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
      {icon}
      <span className="ml-3">{label}</span>
    </a>
  </li>
);

function SideBarComponent({ handleOptionSelect }) {
  const handleLiClick = (option) => {
    handleOptionSelect(option);
  };

  const handleLogoutClick = () => {
    const confirmLogout = window.confirm(
      "¿Estás seguro de que deseas cerrar sesión?"
    );
    if (confirmLogout) {
      logout(); // Aquí ejecuta la función logout
    }
  };

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <FaUsers className="w-6 h-6" />
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 mt-20">
          <ul className="space-y-2 font-medium">
            <SidebarItem
              label="Usuarios"
              onClick={() => handleLiClick("usuarios")}
              icon={<FaUsers className="w-5 h-5" />}
            />
            <SidebarItem
              label="Recetas"
              onClick={() => handleLiClick("recetas")}
              icon={<FaUtensils className="w-5 h-5" />}
            />
            <SidebarItem
              label="Blog"
              onClick={() => handleLiClick("blog")}
              icon={<FaBlog className="w-5 h-5" />}
            />
            <SidebarItem
              label="Sign Up"
              onClick={() => handleLiClick("signup")}
              icon={<FaUserPlus className="w-5 h-5" />}
            />
            <SidebarItem
              label="Logout"
              onClick={handleLogoutClick}
              icon={<FaSignOutAlt className="w-5 h-5 text-blue-500" />}
            />
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default SideBarComponent;
