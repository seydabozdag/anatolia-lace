import React, { useState, useEffect } from "react";

export default function AnatoliaLaceSite() {
  const [selectedSize, setSelectedSize] = useState("Large (100x180 cm)");
  const [selectedColor, setSelectedColor] = useState("Natural Cream");
  const [qty, setQty] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [email, setEmail] = useState("");
  const [mainImage, setMainImage] = useState("/images/galata.jpg");

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Fiyatlar (TRY)
  const priceMap = {
    "Large (100x180 cm)": 1200,
    "Small (50x70 cm)": 450,
    "Runner (50x200 cm)": 1400,
  };

  // Boyuta göre ana görsel eşlemesi (opsiyonel)
  const imageMap = {
    "Large (100x180 cm)": "/images/galata.jpg",
    "Small (50x70 cm)": "/images/fransa.jpg",
    "Runner (50x200 cm)": "/images/İtalya.jpg",
  };

  // Küçük önizlemeler
  const thumbnails = ["/images/galata.jpg", "/images/fransa.jpg", "/images/İtalya.jpg"];

  useEffect(() => {
    const img = imageMap[selectedSize];
    if (img) setMainImage(img);
  }, [selectedSize]);

  // ESC ile lightbox kapatma
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    if (lightboxOpen) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen]);

  const toggleAccordion = (i) => setActiveAccordion(activeAccordion === i ? null : i);

  const price = priceMap[selectedSize] ?? 0;
  const formattedPrice = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(price);

  const collections = [
    {
      title: "ANADOLU MİRASI",
      subtitle: "Türkiye Serisi",
      img: "/images/galata.jpg",
      cta: "Türkiye Serisi",
    },
    {
      title: "PARİS ZARAFETİ",
      subtitle: "Fransa Serisi",
      img: "/images/fransa.jpg",
      cta: "Fransa Serisi",
    },
    {
      title: "GLOBAL YOLCULUK",
      subtitle: "Diğer Koleksiyonlar",
      img: "/images/İtalya.jpg",
      cta: "Tüm Ülkeleri Gör",
    },
  ];

  const brandValues = [
    {
      icon: "🧵",
      title: "Zanaatkârlık",
      desc: "%100 El İşçiliği ve Geleneksel Dokuma Teknikleri.",
    },
    {
      icon: "🔍",
      title: "Şeffaflık",
      desc: "Ürününüzün Menşeini ve Üreticisini İzleyin.",
    },
    {
      icon: "🌱",
      title: "Sürdürülebilirlik",
      desc: "Ekolojik İplikler ve Sıfır Atık Ambalaj.",
    },
  ];

  const productAccordion = [
    {
      title: "HİKÂYESİ",
      content:
        '"Galata, İstanbul\'un zamana meydan okuyan feneridir. Bu dantel, kulenin silüetini, ince dokumamızın zarafetiyle buluşturarak, şehrin ebedi hikayesini evinize taşır."',
    },
    {
      title: "MALZEME VE BAKIM",
      content: "%60 Pamuk, %40 Keten. İnce, hızlı kuruyan dokuma. 40°C hassas yıkama önerilir.",
    },
    {
      title: "İZLENEBİLİRLİK",
      content:
        "Ürününüzün benzersiz kodunu girin ve dokuyucusu ile pamuk kaynağını görün. (Partikül kodu alanı sipariş sonrası aktifleşir.)",
    },
    {
      title: "KARGO VE HEDİYELEŞME",
      content:
        "Tüm ürünler özel ambalaj kutusunda gönderilir. Ücretsiz hediye notu ekleme seçeneği mevcuttur.",
    },
  ];

  return (
    <div
      className="min-h-screen antialiased"
      style={{
        backgroundColor: "#F6EFE3",
        color: "#3B2B24",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      }}
    >
      {/* Duyuru */}
      <div style={{ backgroundColor: "#3B2B24" }} className="text-xs text-white py-2">
        <div className="container mx-auto px-4 text-center">
          Tüm Peştemal Örtülerde Ücretsiz Hediye Paketi ve Kargo
        </div>
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between border-b border-gray-300">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-4">
            <div
              className="rounded-md p-2 flex items-center justify-center"
              style={{
                border: "2px solid rgba(184,115,51,0.2)",
                background: "rgba(184,115,51,0.05)",
              }}
            >
              <img
                src="/images/logo.jpg"
                alt="ANATOLIA LACE logo"
                className="w-80 h-80 md:w-200 md:h-200 object-cover"
                style={{ borderRadius: 8 }}
              />
            </div>
            <span className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "Merriweather, serif", letterSpacing: "1px" }}>
              ANATOLIA LACE
            </span>
          </a>
        </div>

        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#collections" className="hover:text-opacity-70">KOLEKSİYONLAR</a>
          <a href="#story" className="hover:text-opacity-70">HİKÂYEMİZ</a>
        </nav>

        <div className="flex items-center gap-6">
          <button aria-label="search" className="text-xl">🔎</button>
          <button aria-label="account" className="text-xl">👤</button>
        </div>
      </header>

      {/* HERO */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: "Merriweather, serif", color: "#3B2B24" }}>
              Anadolu Zanaatının Küresel Mirası.
            </h2>
            <p className="text-lg leading-relaxed mb-8 max-w-xl">
              Geleneksel dokuma inceliği ve dünya mimarisinden ilham alan dantel sanatı. Her parça bir hikâye, her düğüm bir ustanın imzasıdır.
            </p>
            <a
              href="#collections"
              style={{ backgroundColor: "#B87333" }}
              className="inline-block text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              KOLEKSİYONLARI KEŞFET
            </a>
          </div>

          <div className="relative">
            <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg" style={{ background: "linear-gradient(180deg, #efe8dd, #e8dfd4)" }}>
              <img src={mainImage} alt="Galata dantel detay" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <small className="font-medium">Türkiye Serisi — Galata Detayı</small>
            </div>
          </div>
        </div>
      </section>

      {/* Koleksiyon Vurguları — her biri yan yana, eşit boyut */}
      <section id="collections" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-8" style={{ fontFamily: "Merriweather, serif" }}>
          Koleksiyon Vurguları
        </h3>

        <div className="grid grid-cols-3 gap-6">
          {collections.map((c, i) => (
            <article
              key={i}
              className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition"
            >
              <div
                className="w-full h-48 md:h-80 lg:h-96 overflow-hidden cursor-pointer"
                onClick={() => {
                  setLightboxImage(c.img);
                  setLightboxOpen(true);
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-1" style={{ fontFamily: "Merriweather, serif" }}>{c.title}</h4>
                <p className="text-sm mb-4">{c.subtitle}</p>
                <a href="#" style={{ borderColor: "#B87333", color: "#B87333" }} className="inline-block border-2 px-4 py-2 text-sm font-medium rounded-lg">
                  {c.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Marka Değerleri */}
      <section id="story" className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg p-10 shadow-lg">
          <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: "Merriweather, serif" }}>
            ANATOLIA LACE FELSEFESİ
          </h3>
          <p className="text-lg leading-relaxed mb-10 max-w-3xl">
            Bizim için ürün, hikâyenin somutlaşmış halidir. Anadolu'da kök salan ailemiz, etik ve sürdürülebilir üretim ilkelerinden asla vazgeçmez.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandValues.map((v, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-3xl p-4 rounded-lg flex-shrink-0" style={{ background: "rgba(184,115,51,0.1)" }}>{v.icon}</div>
                <div>
                  <h5 className="font-bold text-lg mb-2">{v.title}</h5>
                  <p className="text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ürün Sayfası */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 bg-white rounded-lg p-6 shadow-lg">
            <div className="mb-6 h-96 rounded-lg overflow-hidden">
              <img src={mainImage} alt="Galata Kulesi Lüks Peştemal" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-4 overflow-x-auto">
              {thumbnails.map((t, idx) => (
                <img
                  key={idx}
                  src={t}
                  className="w-28 h-28 object-cover rounded-lg flex-shrink-0 cursor-pointer hover:shadow-lg transition"
                  alt={`thumb-${idx}`}
                  onClick={() => setMainImage(t)}
                />
              ))}
            </div>
          </div>

          <aside className="bg-white rounded-lg p-8 shadow-lg h-fit">
            <div className="text-xs uppercase font-bold mb-3" style={{ color: "#B87333" }}>TÜRKİYE SERİSİ</div>
            <h4 className="text-2xl font-bold mb-4" style={{ fontFamily: "Merriweather, serif" }}>Galata Kulesi Lüks Peştemal Örtü</h4>

            <div className="mb-6 pb-6 border-b">
              <div className="text-3xl font-bold" style={{ color: "#B87333" }}>{formattedPrice}</div>
              <div className="text-sm text-gray-500">KDV dahil</div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold mb-3">Boyut</label>
              <div className="space-y-2">
                {["Large (100x180 cm)", "Small (50x70 cm)", "Runner (50x200 cm)"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition text-sm font-medium ${
                      selectedSize === s ? "border-copper bg-copper bg-opacity-10" : "border-gray-300 hover:border-copper"
                    }`}
                    style={{
                      borderColor: selectedSize === s ? "#B87333" : undefined,
                      backgroundColor: selectedSize === s ? "rgba(184,115,51,0.1)" : undefined,
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold mb-3">Renk</label>
              <div className="space-y-2">
                {["Natural Cream", "Ecru", "Stone"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition text-sm font-medium ${
                      selectedColor === c ? "border-copper bg-copper bg-opacity-10" : "border-gray-300 hover:border-copper"
                    }`}
                    style={{
                      borderColor: selectedColor === c ? "#B87333" : undefined,
                      backgroundColor: selectedColor === c ? "rgba(184,115,51,0.1)" : undefined,
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border-2 rounded-lg">
                <button className="px-4 py-2 font-bold" onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>−</button>
                <div className="px-6 py-2 font-bold">{qty}</div>
                <button className="px-4 py-2 font-bold" onClick={() => setQty(qty + 1)}>+</button>
              </div>

              <button style={{ backgroundColor: "#B87333" }} className="flex-1 py-3 px-4 rounded-lg text-white font-bold hover:shadow-lg transition">
                SEPETE EKLE
              </button>
            </div>

            <div className="space-y-2">
              {productAccordion.map((item, i) => (
                <div key={i} className="border rounded-lg overflow-hidden">
                  <button className="w-full text-left px-4 py-3 flex justify-between items-center font-bold hover:bg-gray-50 transition" onClick={() => toggleAccordion(i)}>
                    <span>{item.title}</span>
                    <span>{activeAccordion === i ? "−" : "+"}</span>
                  </button>
                  {activeAccordion === i && <div className="px-4 pb-4 text-sm border-t">{item.content}</div>}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16" style={{ borderTop: "1px solid rgba(0,0,0,0.1)", backgroundColor: "#fafafa" }}>
        <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-bold text-lg mb-4">Koleksiyonlar</h5>
            <ul className="space-y-2 text-sm">
              <li>Türkiye</li>
              <li>Fransa</li>
              <li>İtalya</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-4">Kurumsal</h5>
            <ul className="space-y-2 text-sm">
              <li>Hikâyemiz</li>
              <li>İletişim</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-4">Haber Bülteni</h5>
            <p className="text-sm mb-4">Yeni koleksiyonlar ve zanaat hikâyeleri ilk size gelsin.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="E-posta" value={email} onChange={(e) => setEmail(e.target.value)} className="px-4 py-2 rounded-l-lg border text-sm w-full" />
              <button className="px-4 py-2 rounded-r-lg border-l-0" style={{ borderColor: "#B87333", color: "#B87333", backgroundColor: "rgba(184,115,51,0.05)" }}>
                Abone Ol
              </button>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-4">Yasal ve Sosyal</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-copper">Gizlilik Politikası</a></li>
              <li>© 2025 ANATOLIA LACE. Made in Türkiye.</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Lightbox / Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end mb-3">
              <button
                onClick={() => setLightboxOpen(false)}
                className="text-white bg-black/40 px-3 py-1 rounded hover:bg-black/60"
                aria-label="Kapat"
              >
                ✕
              </button>
            </div>
            <div className="bg-white rounded-lg overflow-hidden p-4">
              <img src={lightboxImage} alt="Büyütülmüş görsel" className="w-full max-h-[80vh] object-contain rounded" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}