import React, { useEffect, createRef } from 'react';
import '../../css/header.css';
import "../../css/layout.css"
import lottie from "lottie-web";
import animation from "../Images/yoga-animation.json";



const Header = () => {
  let animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);

  return (
  <header className="w-screen h-screen relative flex items-center justify-center bg-pink-200">
    <nav className="absolute top-0 w-full h-20 flex items-center justify-around">
      <div className="text-2xl text-gray-700 lg:text-gray-700 text-2xl">KALM TERAPHY</div>
      <div className="hidden lg:flex">
        <ul className="flex items-center">
          <li className="list-none uppercase text-gray-700 m-2">Inicio</li>
          <li className="list-none uppercase text-gray-700 m-2">Nosotros</li>
          <li className="list-none uppercase text-gray-700 m-2">Valores</li>
          <li className="list-none uppercase text-gray-700 m-2">Servicios</li>
          <li className="list-none uppercase text-gray-700 m-2">Contacto</li>
        </ul>
      </div>
      <div className="ham lg:hidden">
        <div className="px-4 line bg-white m-1"></div>
        <div className="px-4 line bg-white m-1"></div>
      </div>
    </nav>
    <div className="banner container mx-auto flex flex-col md:flex-row justify-around items-center ">
      <div className="leading-none w-3/6 p-5 flex flex-col">
        <div className="flex">
          <h2 className="uppercase text-center text-white font-black m-2">vive</h2>
          <h2 className="destacado uppercase text-center text-white font-black m-2 ">libre</h2>
        </div>

        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar</p>
      </div>

      <div className="w-3/6" ref={animationContainer}></div>

    </div>

  </header>

  )
};

export default Header;
