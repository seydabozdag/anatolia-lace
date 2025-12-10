import React from 'react';

export default function Collections() {
  const collections = [
    {
      title: 'ANADOLU MİRASI',
      img: '/images/galata.jpg',
      button: 'Türkiye Serisi',
    },
    {
      title: 'PARİS ZARAFETİ',
      img: '/images/france.jpg',
      button: 'Fransa Serisi',
    },
    {
      title: 'GLOBAL YOLCULUK',
      img: '/images/italya.jpg',
      button: 'Tüm Ülkeleri Gör',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 text-center">
      {collections.map((col, index) => (
        <div key={index} className="shadow-lg rounded overflow-hidden">
          <img src={col.img} alt={col.title} className="w-full h-64 object-cover" />
          <h2 className="text-xl font-semibold mt-4 text-dark-brown">{col.title}</h2>
          <button className="mt-2 px-4 py-2 bg-copper text-cream font-semibold rounded hover:bg-copper-light">
            {col.button}
          </button>
        </div>
      ))}
    </div>
  );
}
