import React from 'react';
import AboutProduct from './aboutProduct';

const ProductPage = () => {
    return (
        <div className="flex flex-wrap justify-start">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <AboutProduct
                    title="Primera etapa "
                    description="Descripción breve del Producto 1."
                    additionalInfo="Información adicional sobre el Producto 1."
                />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <AboutProduct
                    title="segunds etapa"
                    description="Descripción breve del Producto 2."
                    additionalInfo="Información adicional sobre el Producto 2."
                />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <AboutProduct
                    title="tercera etapa"
                    description="Descripción breve del Producto 3."
                    additionalInfo="Información adicional sobre el Producto 3."
                />
            </div>
        </div>
    );
};

export default ProductPage;
