// Constants.js

export const formStyles = {
  container: "w-full md:w-1/2 p-6 flex items-center justify-center",
  formContainer:
    "max-w-md bg-neutral-200 rounded-lg overflow-hidden p-4 w-70 md:w-3/4 shadow-lg shadow-indigo-950",
  buttonAuth: "text-sm text-blue-500 hover:underline",
  errorMessage: "text-red-500",
  button:
    "bg-blue-500 hover:bg-blue-600 active:bg-blue-800 disable:bg-blue-900 text-white font-bold py-2 px-4 rounded w-full",
  title: "text-2xl font-semibold mb-4 text-center",
  inputLabel: "block text-gray-700 text-sm font-bold mb-2",
  inputField: "border border-gray-500 rounded px-4 py-2 w-full",
  link: "text-blue-500 hover:underline",
  navbar: {
    nav: "bg-blue-500 sm:bg-green-500 md:bg-red-500 lg:bg-yellow-500 xl:bg-purple-500 bg-custom-green text-white p-4 shadow-lg sticky top-0 z-50",
    container: "container mx-auto flex justify-between items-center",
    logo: "h-auto object-cover max-w-6 max-h-6 md:max-w-10 md:max-h-10 lg:max-w-14 lg:max-h-14",
    menu: "flex flex-auto flex-row space-x-4 p-3 md:space-x-6 lg:space-x-10",
    link: "text-white hover:bg-white hover:text-custom-green border-b-2 border-white rounded-md font-bold text-16",
    transparentButton:
      "bg-transparent text-white hover:border-4 hover:border-white hover:rounded-md p-2 px-4 border-4 border-transparent",
  },
};

// Agrega clases de Tailwind CSS para hacer más responsive el diseño
export const responsiveFormStyles = {
  container: "w-full md:w-1/2 lg:w-1/3 p-6 flex items-center justify-center",
  formContainer:
    "max-w-md sm:max-w-lg bg-neutral-200 rounded-lg overflow-hidden p-4 md:w-70 lg:w-80 shadow-lg shadow-indigo-950",
  button:
    "bg-blue-500 hover:bg-blue-600 active:bg-blue-800 disable:bg-blue-900 text-white font-bold py-3 px-6 md:py-2 md:px-4 rounded w-full",
};
