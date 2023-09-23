import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para indicar que ha ocurrido un error.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Puedes registrar el error o realizar otras acciones necesarias aquí.
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes personalizar la apariencia de tu mensaje de error aquí.
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Error 404</h2>
            <p className="text-gray-600">La página que buscas no existe.</p>
            <Link
              to="/home"
              className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
