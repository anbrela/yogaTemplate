import React from 'react';

import Layout from '../components/layout/Layout';

const Index = () => {





  const defaultData = {
    siteName: "KALM TERAPHY",
    siteSlogan: 'Vive Libre',
    siteSloganInfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.",
    siteLogo: '',
    siteDate: "Desde 2002",
    siteInfo:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    sitePhone: '67767726',
    siteEmail: 'hola@healtcarepet.com',
    siteAddress: 'Calle sin número par',
    sitePostalCode: '15025',
    siteCity: 'Santiago de Compostela',
    siteProvince: 'A Coruña',
    siteCountry: 'España',
    timeTable: 'L-V: 10h 14h 18:30 21:30<br/>, Sábados 9-14h',
    features: [
      {
        id: 'aaaa',
        name: 'Instructores Profesionales',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: 'featured1',
        weight: 0
      },
      {
        id: 'bbbb',
        name: 'Materiales Seguros',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: 'featured2',
        weight: 1
      },
      {
        id: 'cccc',
        name: 'Clases Personales',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: 'featured3',
        weight: 2
      }
    ],
    services: [
      {
        id: 'ñkljh',
        name: 'Productos ecológicos',
        description:
          'Lorem Ipsum productum is simply dummy text of the printing and typesetting industry.',
        price: 'Desde 30€',
        image: 'dog.svg',
        weight: 0
      },
      {
        id: 'ñkljhñljh',
        name: 'Revisiones semanales',
        description:
          'Lorem Ipsum is revision simply dummy text of the printing and typesetting industry.',
        image: 'dog.svg',
        price: 'Desde 30€',
        weight: 1
      },
      {
        id: 'jñlkhlh yyhg',
        name: 'Collares de salud',
        description:
          'Lorem Ipsum colar is simply dummy text of the printing and typesetting industry.',
        image: 'dog.svg',
        price: 'Desde 30€',
        weight: 2
      },
      {
        id: 'ñkljjhllh',
        name: 'Agenda de vacunas',
        description:
          'Lorem Ipsum vacunae is simply dummy text of the printing and typesetting industry.',
        image: 'dog.svg',
        price: 'Desde 50€',
        weight: 3
      },
      {
        id: 'ñkljjh4llh',
        name: 'Otra cosa',
        description:
          'Lorem Ipsum vacunae is simply dummy text of the printing and typesetting industry.',
        image: 'dog.svg',
        price: 'Desde 50€',
        weight: 4
      },
      {
        id: 'ñkljjh4llh',
        name: 'Otra cosa',
        description:
          'Lorem Ipsum vacunae is simply dummy text of the printing and typesetting industry.',
        image: 'dog.svg',
        price: 'Desde 50€',
        weight: 4
      }
    ]
  };


  return (
    <Layout data={defaultData} />
  );


};

export default Index;
