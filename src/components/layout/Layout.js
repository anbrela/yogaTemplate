import React from 'react';
import Footer from './Footer';
import Header from './Header';
import about from '../Images/about.svg';
import featured1 from '../Images/featured1.svg';
import featured2 from '../Images/featured2.svg';
import featured3 from '../Images/featured3.svg';
import service1 from "../Images/service1.svg"
import service2 from "../Images/service2.svg"
import service3 from "../Images/service3.svg"
import service4 from "../Images/service4.svg"
import shapeAbout from '../Images/shape-about.svg';
import shape2 from '../Images/shape2.svg';
import contact from '../Images/contact.svg';


const Layout = ({ data }) => {


  return (
    <>
      <Header data={data} />
      <section className='about pt-10 bg-pink-200 relative'>
        <div className=' hidden lg:flex transform -rotate-90 w-40 absolute top-0 left-0'>
          <img src={shapeAbout} alt='' />
        </div>
        <div className='container mx-auto flex flex-col justify-center items-center lg:flex-row'>
          <div className='w-3/6 flex justify-center'>
            <img className=' w-40 m-5 lg:m-0 lg:w-56 ' src={about} alt='' />
          </div>
          <div className='w-3/6 m-5 lg:m-0'>
            <span className='text-gray-700'>{data.siteDate}</span>
            <h1 className='uppercase title-web font-black text-5xl'>{data.siteName}</h1>
            <p className='text-gray-700 text-justify'>{data.siteInfo}</p>
          </div>
        </div>
      </section>
      <section className=''>
        <svg height='100%' width='100%' id='svg' viewBox='0 0 1440 500' xmlns='http://www.w3.org/2000/svg'
             className='transition duration-300 ease-in-out delay-150'>
          <path
            d='M 0,500 C 0,500 0,250 0,250 C 184.93333333333334,225.86666666666667 369.8666666666667,201.73333333333332 509,207 C 648.1333333333333,212.26666666666668 741.4666666666667,246.93333333333334 889,259 C 1036.5333333333333,271.06666666666666 1238.2666666666667,260.5333333333333 1440,250 C 1440,250 1440,500 1440,500 Z'
            stroke='none' stroke-width='0' fill='#FED6E2'
            className='transition-all duration-300 ease-in-out delay-150' transform='rotate(-180 720 250)'></path>
        </svg>
      </section>
      <section className='featured container mx-auto lg:flex'>

        {/*POR QUE A MI NO ME FUNCIONA CON EL map(feature) => {} . SOLO SIN LAS LLAVES*/}

        {data.features.map((feature) =>
          <div className='flex flex-col justify-center items-center mb-5' key={feature.id}>
            <img className='w-32' src={featured1} alt='' />
            <div className='w-10/12 m-4'>
              <h3 className='font-bold uppercase text-lg'>{feature.name}</h3>
              <p className='text-justify'>
                {feature.description}
              </p>
            </div>
          </div>
        )}

      </section>
      <section>
        <svg height='100%' width='100%' id='svg' viewBox='0 0 1440 400' xmlns='http://www.w3.org/2000/svg'
             className='transition duration-300 ease-in-out delay-150'>
          <path
            d='M 0,400 C 0,400 0,200 0,200 C 86.64285714285714,197 173.28571428571428,194 306,197 C 438.7142857142857,200 617.5,209 739,224 C 860.5,239 924.7142857142858,260 1032,257 C 1139.2857142857142,253.99999999999997 1289.642857142857,227 1440,200 C 1440,200 1440,400 1440,400 Z'
            stroke='none' strokeWidth='0' fill='#FED6E2'
            className='transition-all duration-300 ease-in-out delay-150'></path>
        </svg>
      </section>
      <section className='bg-pink-200 relative'>
        <div className='absolute w-56 right-0 top-0'>
          <img src={shape2} alt='' />
        </div>
        <div className='services container mx-auto w-3/6 mb-20'>
          <h2 className='font-black text-3xl text-gray-700 uppercase'>{data.servicesTitle}</h2>
          <p>{data.servicesDescription}</p>
        </div>
        <div className='container mx-auto flex justify-center'>


          {data.services.map((service) => (

            <div className='item rounded-tr-2xl rounded-br-xl bg-blue-200 m-5' style={{backgroundImage: `url(${service1})`}} key={service.id} >
              <div className='h-full w-full flex flex-col justify-start p-3'>
                <h2 className='font-bold uppercase text-white'>{service.name}</h2>
                <p className='text-white'>{service.description}</p>
                <span className='bg-white w-32 flex justify-center items-center p-1 mt-2 rounded-lg'>{service.price}</span>
              </div>
            </div>

          ))}



        </div>
      </section>
      <section>
        <svg height='100%' width='100%' id='svg' viewBox='0 0 1440 400' xmlns='http://www.w3.org/2000/svg'
             className='transition duration-300 ease-in-out delay-150'>
          <path
            d='M 0,400 C 0,400 0,200 0,200 C 249,181.5 498,163 738,163 C 978,163 1209,181.5 1440,200 C 1440,200 1440,400 1440,400 Z'
            stroke='none' stroke-width='0' fill='#FED6E2'
            className='transition-all duration-300 ease-in-out delay-150' transform='rotate(-180 720 200)'></path>
        </svg>
      </section>
      <section className='pb-5'>
        <div className='container mx-auto flex justify-center'>
          <div className='w-3/6'>
            <img src={contact} alt='' />

          </div>

          <div className=' contact w-3/6 flex flex-col items-center justify-center'>
            <h2 className='uppercase font-bold text-gray-700 text-5xl mb-5'>{data.contactTitle}</h2>
            <div>
              <ul>
                <li className='flex justify-center'>
                  <p className='m-2 text-xl text-gray-700'>Teléfono:</p>
                  <a className='m-2 text-xl' href='#'>
                    {data.sitePhone}
                  </a>
                </li>

                <li className='flex justify-center'>
                  <p className='m-2 text-xl text-gray-700'>Whatsapp:</p>
                  <a className='m-2 text-xl' href='#'>
                    {data.sitePhone}
                  </a>
                </li>

                <li className='flex justify-center'>
                  <p className='m-2 text-xl text-gray-700'>Email:</p>
                  <a className='m-2 text-xl' href='#'>
                    {data.siteEmail}
                  </a>
                </li>

                <li className='flex justify-center'>
                  <p className='m-2 text-xl text-gray-700'>Dirección:</p>
                  <a className='m-2 text-xl' href='#'>
                    {data.siteAddress}
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default Layout;
