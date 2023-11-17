import React, { useEffect, useState } from "react";
import { updateUsuarioData } from "../../../services/authentication/userUtils";
import { FaSave, FaUserEdit } from "react-icons/fa";

// services/authentication/userService.js
export const updateUser = (formData) => {
  return updateUsuarioData(formData);
};

const UserProfilePage = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    correoElectronico: "",
    rol: "",
  });
  const [formData, setFormData] = useState({
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    correoElectronico: "",
    rol: "",
  });
  const [rolChanged, setRolChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("userData");
    const user = data ? JSON.parse(data) : null;
    setUsuario(user);
    setFormData({
      nombre: user?.nombre || "",
      primerApellido: user?.primerApellido || "",
      segundoApellido: user?.segundoApellido || "",
      correoElectronico: user?.correoElectronico || "",
      rol: user?.rol || "",
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (name === "rol" && value !== usuario.rol) {
      setRolChanged(true);
    } else {
      setRolChanged(false);
    }
  };

  const validateFormData = (formData) => {
    // Implement your form validation logic here
    return true; // Return true if valid, false otherwise
  };

  const handleUpdateUser = () => {
    if (JSON.stringify(formData) !== JSON.stringify(usuario)) {
      setLoading(true);
      if (validateFormData(formData)) {
        updateUser(formData)
          .then(() => {
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
            setError("Error updating user data");
            console.error(error);
          });
      } else {
        setLoading(false);
        console.warn("Form data is invalid.");
      }
    } else {
      console.warn("No se realizaron cambios.");
    }
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg">
      <h1 className="text-3xl font-semibold mb-4">Perfil de Usuario</h1>
      <div className="mb-4">
        <label className="block text-sm">Nombre:</label>
        <p>{usuario.nombre || ""}</p>
      </div>
      <div className="mb-4">
        <label className="block text-sm">Primer Apellido:</label>
        <p>{usuario.primerApellido || ""}</p>
      </div>
      <div className="mb-4">
        <label className="block text-sm">Segundo Apellido:</label>
        <p>{usuario.segundoApellido || ""}</p>
      </div>
      <div className="mb-4">
        <label className="block text-sm">Correo Electrónico:</label>
        <p>{usuario.correoElectronico || ""}</p>
      </div>
      <div className="mb-4">
        <label className={`block text-sm ${rolChanged ? "text-red-500" : ""}`}>
          Rol:
        </label>
        <p className={rolChanged ? "text-red-500" : ""}>{usuario.rol || ""}</p>
      </div>
      {/* <div className="flex justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={handleUpdateUser}
        >
          <FaSave className="mr-2" />
          Guardar
        </button>
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none"
          onClick={() =>
            alert(
              rolChanged
                ? "Advertencia: El rol ha sido modificado."
                : "No se realizaron cambios."
            )
          }
        >
          <FaUserEdit className="mr-2" />
          Cambiar
        </button>
      </div> */}
    </div>
  );
};

export default UserProfilePage;
