import React, { useState, useEffect } from "react";

const SocialNetwork = () => {
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const socialMenuStyle = {
    background: isSticky ? "rgba(255, 255, 255, 0.9)" : "transparent",
    position: isSticky ? "fixed" : "absolute",
    top: 0,
    left: 0,
    height: showSocialMenu ? "200px" : "0",
    width: "50px",
    transition: "height 0.3s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const socialIconStyle = "text-2xl my-2";

  return (
    <div style={socialMenuStyle} className="flex flex-col items-center">
      <button
        onClick={() => setShowSocialMenu(!showSocialMenu)}
        className="mt-2 px-2 py-1 bg-gray-800 text-white rounded-full hover:bg-blue-500 hover:text-white focus:outline-none"
      >
        {showSocialMenu ? "Ocultar" : "Mostrar"}
      </button>
      {showSocialMenu && (
        <>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 text-blue-500 hover:text-blue-700"
          >
            <i className={`fab fa-facebook-f ${socialIconStyle}`}></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 text-blue-500 hover:text-blue-700"
          >
            <i className={`fab fa-twitter ${socialIconStyle}`}></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 text-red-500 hover:text-red-700"
          >
            <i className={`fab fa-instagram ${socialIconStyle}`}></i>
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 text-black hover:text-gray-800"
          >
            <i className={`fab fa-tiktok ${socialIconStyle}`}></i>
          </a>
        </>
      )}
    </div>
  );
};

export default SocialNetwork;
