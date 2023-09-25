import React from 'react';
import AboutProduct from './aboutProduct';

const ProductPage = () => {
    return (
        <div className="container mx-auto flex justify-center items-center h-screen">
            <AboutProduct
                title="Producto 1"
                description="Descripción breve del Producto 1."
                additionalInfo="Información adicional sobre el Producto 1."
            />

            <AboutProduct
                title="Producto 2"
                description="Descripción breve del Producto 2."
                additionalInfo="Información adicional sobre el Producto 2"
            />
        </div>
    );
};

export default ProductPage;
