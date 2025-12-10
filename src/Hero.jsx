import React from 'react';

export default function Hero() {
  return (
    <div className="text-center p-10 bg-cream">
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="flex-1">
          <img
            src="/images/galata.jpg"
            alt="Galata Kulesi Peştemal"
            className="mx-auto rounded shadow-lg"
          />
          <h2 className="text-xl font-semibold mt-2 text-dark-brown">Anadolu Mirası</h2>
        </div>
        <div className="flex-1">
          <img
            src="/images/france.jpg"
            alt="Fransa Motifleri Peştemal"
            className="mx-auto rounded shadow-lg"
          />
          <h2 className="text-xl font-semibold mt-2 text-dark-brown">Paris Zarafeti</h2>
        </div>
        <div className="flex-1">
          <img
            src="/images/italya.jpg"
            alt="İtalya Motifleri Peştemal"
            className="mx-auto rounded shadow-lg"
          />
          <h2 className="text-xl font-semibold mt-2 text-dark-brown">Global Yolculuk</h2>
        </div>
      </div>

      <p className="mt-4 text-lg text-dark-brown">
        Geleneksel dokuma inceliği ve dünya mimarisinden ilham alan dantel sanatı.
      </p>

      <button className="mt-4 px-6 py-2 bg-copper text-cream font-semibold rounded hover:bg-copper-light">
        KOLEKSİYONLARI KEŞFET
      </button>
    </div>
  );
}
