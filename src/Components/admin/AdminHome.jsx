import React, { useState } from 'react';
import SideBarComponent from './SideBarComponent';
import Usuarios from './Usuarios';
import Recetas from './Recetas';
import Blog from './Blog';



function AdminHome() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };
    

    return (
        <div className="admin-container">
            <SideBarComponent handleOptionSelect={handleOptionSelect} />

            <div className="admin-content">
                {selectedOption === 'recetas' && <Recetas />}
                {selectedOption === 'usuarios' && <Usuarios />}
                {selectedOption === 'blog' && <Blog  />}
                
            </div>
        </div>
    );
}

export default AdminHome;
