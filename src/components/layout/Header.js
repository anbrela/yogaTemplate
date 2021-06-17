import React, { useEffect, createRef, useState } from 'react';
import '../../css/header.css';
import '../../css/layout.css';
import lottie from 'lottie-web';
import animation from '../Images/yoga-animation.json';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import {AiOutlineClose} from "react-icons/ai";



const Header = ({ data }) => {



  let animationContainer = createRef();

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animation
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);


  const handleChangeMenu = () => {
    setMenu(!menu);
  }

  return (
    <header className='w-screen h-screen relative flex items-center justify-center bg-pink-200'>

      <div className={ menu ? "responsive w-5/6 h-4/5 z-50 absolute top-0 right-0 flex flex-col bg-white rounded-bl-3xl shadow-lg " : "hidden"} >



        <div className="w-full flex justify-end absolute text-3xl right-0 top-0 mt-10 mr-10 cursor-pointer" onClick={handleChangeMenu}>
        <AiOutlineClose />
        </div>

        <div className="flex w-full h-full justify-center">

          <ul className='flex flex-col w-full h-full justify-around items-center pt-32 pb-32'>
            <li className='list-none uppercase text-xl text-gray-700 m-2' onClick={handleChangeMenu}>
              <a className="text-gray-800" href="/">Inicio</a>

            </li>
            <li className='list-none uppercase text-xl text-gray-700 m-2' onClick={handleChangeMenu}>
              <a className="text-gray-800" href="#about">Nosotros</a>
            </li>
            <li className='list-none uppercase text-xl text-gray-700 m-2' onClick={handleChangeMenu}>
              <a className="text-gray-800" href="#features">Valores</a>
            </li>
            <li className='list-none uppercase text-xl text-gray-700 m-2' onClick={handleChangeMenu}>
              <a className="text-gray-800" href="#services">Servicios</a>
            </li>
            <li className='list-none uppercase text-xl text-gray-700 m-2' onClick={handleChangeMenu}>
              <a className="text-gray-800" href="#contact">Contacto</a>
            </li>
          </ul>

        </div>




      </div>

      <nav className='absolute top-0 w-full h-20 flex items-center justify-around'>
        <div className='text-2xl text-gray-700 lg:text-gray-700 text-2xl'>{data.siteName}</div>
        <div className='hidden lg:flex'>
          <ul className='flex items-center'>
            <li className='list-none uppercase text-gray-700 m-2'>
              <a className="text-gray-800" href="/">Inicio</a>

            </li>
            <li className='list-none uppercase text-gray-700 m-2'>
              <a className="text-gray-800" href="#about">Nosotros</a>

            </li>
            <li className='list-none uppercase text-gray-700 m-2'>
              <a className="text-gray-800" href="#features">Valores</a>

            </li>
            <li className='list-none uppercase text-gray-700 m-2'>
              <a className="text-gray-800" href="#services">Servicios</a>

            </li>
            <li className='list-none uppercase text-gray-700 m-2'>
              <a className="text-gray-800" href="#contact">Contacto</a>

            </li>
          </ul>
          <a className="flex items-center ml-5 text-gray-700 text-xl" href='#'>

            <AiOutlineWhatsApp />

          </a>
        </div>
        <div className='ham lg:hidden' onClick={handleChangeMenu}>
          <div className='px-4 line bg-white m-1'></div>
          <div className='px-4 line bg-white m-1'></div>
        </div>
      </nav>
      <div className='banner container mx-auto flex flex-col md:flex-row justify-around items-center '>
        <div className='leading-none w-5/6 lg:w-3/6 lg:p-5 flex flex-col'>
          <div className='flex'>
            <h2 className='uppercase text-white text-center font-black m-2'>{data.siteSlogan}</h2>
          </div>

          <p className=''>{data.siteSloganInfo}</p>
        </div>

        <div className='w-4/6 mt-10 md:mt-0 lg:w-3/6 lg:p-10' ref={animationContainer}></div>

      </div>

    </header>

  );
};

export default Header;
