import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Phone, Mail, MapPin, CheckCircle, ChevronRight, Play, X, ChevronLeft, Eye } from 'lucide-react';
import Header from './Header';
import { servicesData } from './servicesData';
import ServiceDetailPage from './ServiceDetailPage';
import UnderConstruction from './UnderConstruction';

// Cambiar a false para mostrar la web completa
const UNDER_CONSTRUCTION = true;



const projectsGallery = [
  // TV Oculta en Techo Project (Video + Images)
  {
    id: 'tv-1',
    type: 'video',
    url: '/image/proyectos/tv-oculta/video.mp4',
    thumbnail: '/image/proyectos/tv-oculta/tv_oculta_5.webp',
    title: 'Mecanismo motorizado de TV oculta en techo',
    category: 'tv-oculta',
    description: 'Demostración del funcionamiento del soporte motorizado que oculta y desciende la televisión integrada en el techo de Pladur.'
  },
  {
    id: 'tv-2',
    type: 'image',
    url: '/image/proyectos/tv-oculta/tv_oculta_1.webp',
    title: 'Instalación de la estructura del techo',
    category: 'tv-oculta'
  },
  {
    id: 'tv-3',
    type: 'image',
    url: '/image/proyectos/tv-oculta/tv_oculta_2.webp',
    title: 'Estructura metálica del falso techo',
    category: 'tv-oculta'
  },
  {
    id: 'tv-4',
    type: 'image',
    url: '/image/proyectos/tv-oculta/tv_oculta_3.webp',
    title: 'Preparación de instalaciones eléctricas',
    category: 'tv-oculta'
  },
  {
    id: 'tv-5',
    type: 'image',
    url: '/image/proyectos/tv-oculta/tv_oculta_4.webp',
    title: 'Placas de Pladur atornilladas',
    category: 'tv-oculta'
  },
  {
    id: 'tv-6',
    type: 'image',
    url: '/image/proyectos/tv-oculta/tv_oculta_5.webp',
    title: 'Acabado y masillado de juntas',
    category: 'tv-oculta'
  },
  {
    id: 'tv-7',
    type: 'image',
    url: '/image/proyectos/tv-oculta/tv_oculta_6.webp',
    title: 'Techo terminado y pintado',
    category: 'tv-oculta'
  },
  {
    id: 'tv-8',
    type: 'image',
    url: '/image/proyectos/tv-oculta/tv_oculta_7.webp',
    title: 'Mecanismo en posición oculta',
    category: 'tv-oculta'
  },
  {
    id: 'tv-9',
    type: 'image',
    url: '/image/proyectos/tv-oculta/tv_oculta_8.webp',
    title: 'Mecanismo en posición desplegada',
    category: 'tv-oculta'
  },
  {
    id: 'tv-10',
    type: 'image',
    url: '/image/proyectos/tv-oculta/tv_oculta_9.webp',
    title: 'Detalle de la integración estética',
    category: 'tv-oculta'
  },
  {
    id: 'tv-11',
    type: 'image',
    url: '/image/proyectos/tv-oculta/tv_oculta_10.webp',
    title: 'Pruebas finales de funcionamiento',
    category: 'tv-oculta'
  },

  // Proyecto: Librería de Pladur
  {
    id: 'libreria-img-1',
    type: 'image',
    url: '/image/proyectos/libreria/libreria_1.webp',
    title: 'Replanteo y diseño de la estantería',
    category: 'libreria'
  },
  {
    id: 'libreria-img-2',
    type: 'image',
    url: '/image/proyectos/libreria/libreria_2.webp',
    title: 'Montaje de estructura metálica perimetral',
    category: 'libreria'
  },
  {
    id: 'libreria-img-3',
    type: 'image',
    url: '/image/proyectos/libreria/libreria_3.webp',
    title: 'Refuerzos interiores para soportar peso',
    category: 'libreria'
  },
  {
    id: 'libreria-img-4',
    type: 'image',
    url: '/image/proyectos/libreria/libreria_4.webp',
    title: 'Cableado y cajas de luz integradas',
    category: 'libreria'
  },
  {
    id: 'libreria-img-5',
    type: 'image',
    url: '/image/proyectos/libreria/libreria_5.webp',
    title: 'Atornillado de placas de yeso en laterales',
    category: 'libreria'
  },
  {
    id: 'libreria-img-6',
    type: 'image',
    url: '/image/proyectos/libreria/libreria_6.webp',
    title: 'Revestimiento de baldas horizontales',
    category: 'libreria'
  },
  {
    id: 'libreria-img-7',
    type: 'image',
    url: '/image/proyectos/libreria/libreria_7.webp',
    title: 'Perfilería cantonera de protección',
    category: 'libreria'
  },
  {
    id: 'libreria-img-8',
    type: 'image',
    url: '/image/proyectos/libreria/libreria_8.webp',
    title: 'Aplicación de pasta para juntas',
    category: 'libreria'
  },
  {
    id: 'libreria-img-9',
    type: 'image',
    url: '/image/proyectos/libreria/libreria_9.webp',
    title: 'Lijado de precisión y afinado',
    category: 'libreria'
  },
  {
    id: 'libreria-img-10',
    type: 'image',
    url: '/image/proyectos/libreria/libreria_10.webp',
    title: 'Pintura de imprimación y acabado',
    category: 'libreria'
  },
  {
    id: 'libreria-img-11',
    type: 'image',
    url: '/image/proyectos/libreria/libreria_11.webp',
    title: 'Librería de Pladur terminada',
    category: 'libreria'
  },

  // Proyecto: Cajón cubre mueble de cocina
  {
    id: 'cajon-cocina-img-1',
    type: 'image',
    url: '/image/proyectos/cajon-cocina/cajon-cocina_1.webp',
    title: 'Estructura superior de ocultación',
    category: 'cajon-cocina'
  },
  {
    id: 'cajon-cocina-img-2',
    type: 'image',
    url: '/image/proyectos/cajon-cocina/cajon-cocina_2.webp',
    title: 'Estructura con esquina',
    category: 'cajon-cocina'
  },
  {
    id: 'cajon-cocina-img-3',
    type: 'image',
    url: '/image/proyectos/cajon-cocina/cajon-cocina_3.webp',
    title: 'Cajón de cocina terminado y masillado',
    category: 'cajon-cocina'
  },

  // General Pladur Projects (original unsplash items)
  {
    id: 'gen-1',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    title: 'Techos decorativos con foseados y luces LED',
    category: 'otros'
  },
  {
    id: 'gen-2',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    title: 'Tabiquería comercial en locales y oficinas',
    category: 'otros'
  },
  {
    id: 'gen-3',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    title: 'Muebles a medida y estanterías de pladur',
    category: 'otros'
  },
  {
    id: 'gen-4',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    title: 'Instalación de techos registrables en oficinas',
    category: 'otros'
  },
  {
    id: 'gen-5',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    title: 'Aislamiento acústico de paredes medianeras',
    category: 'otros'
  },
  {
    id: 'gen-6',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
    title: 'Techos continuos para cocinas y baños',
    category: 'otros'
  },
  {
    id: 'gen-7',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80',
    title: 'Falsos techos para aislamiento térmico',
    category: 'otros'
  }
];

function Inicio() {
  return (
    <>
      <div className="relative pt-16 flex flex-col">
      <div className="absolute inset-0 z-0">
        <img
          src="/image/Aplaka2_BG.jpeg"
          alt="Reforma integral"
          className="w-full h-full object-cover object-right md:object-center"
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-center w-full min-h-[calc(100vh-64px)]">
        <div className="max-w-2xl py-20">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-green-400 uppercase mb-3 block">
            Construimos espacios, creamos confianza
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Especialistas en Sistemas PYL en Málaga (instaladores de “Pladur”)
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Transformamos tus espacios con soluciones de construcción en seco rápidas, limpias y de máxima calidad. Desde tabiques, trasdosados y techos hasta soluciones avanzadas de aislamiento térmico e insonorización a medida para tu hogar o negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/34685554188"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-audiowide font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Contactar por WhatsApp
            </a>
            <a href="mailto:info@aplaka2.es" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-audiowide font-medium rounded-md text-green-700 bg-white hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl">
              <Mail className="mr-2 h-5 w-5" />
              Enviar un Email
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

function Servicios() {
  return (
    <div className="pt-28 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mt-2">Soluciones a medida en Sistemas PYL (“Pladur”)</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Te ayudamos a transformar tus espacios con soluciones en Placa de Yeso Laminado (comúnmente conocido como “Pladur”) totalmente adaptadas a lo que necesitas. Cuidamos cada detalle de la instalación para que el resultado sea cómodo, funcional y con un acabado limpio y de calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Link 
              key={service.id} 
              to={`/servicios/${service.id}`}
              className="group cursor-pointer bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-green-300 transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-semibold bg-green-600/90 px-3 py-1 rounded-full backdrop-blur-sm">
                    Ver detalles completos
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{service.description}</p>
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center text-green-600 font-semibold text-sm group-hover:underline">
                  Conocer más detalles
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


function Nosotros() {
  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80"
              alt="Equipo trabajando"
              className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Experiencia y precisión en montaje de Sistemas PYL
            </h2>
            
            <div className="text-lg text-gray-600">
              <p className="mb-8 leading-relaxed">
                En Aplaka2, nuestra misión es ayudarte a crear espacios mejor aprovechados y confortables. Como instaladores especialistas en reformas de viviendas, comercios y oficinas, dominamos desde la tabiquería estructural hasta detalles de diseño como foseados, candilejas y mobiliario a medida, combinando estética con un aislamiento termoacústico insuperable.
              </p>
            </div>
            
            <ul className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
              {['Sistemas PYL certificados', 'Aislamiento térmico y acústico', 'Instalación rápida y limpia', 'Asesoramiento técnico especializado'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoGridItem({ item, onClick }) {
  const videoRef = React.useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (!videoRef.current) return;
    if (isHovered) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Play prevented:", error);
        });
      }
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-64 overflow-hidden rounded-xl bg-black cursor-pointer group border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <video
        ref={videoRef}
        src={item.url}
        poster={item.thumbnail}
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 flex flex-col justify-between p-4">
        <div className="self-start">
          <span className="bg-green-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
            <Play className="h-3 w-3 fill-current" /> Vídeo
          </span>
        </div>
        
        {/* Play hover effect icon in center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 bg-white/10 group-hover:bg-white/95 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Play className="h-5 w-5 text-green-600 fill-current ml-0.5" />
          </div>
        </div>

        <div className="mt-auto pointer-events-none">
          <h3 className="text-white font-bold text-base line-clamp-1">{item.title}</h3>
          {item.description && (
            <p className="text-gray-300 text-xs mt-1 line-clamp-2 font-light">{item.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function ImageGridItem({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative w-full h-64 overflow-hidden rounded-xl bg-gray-100 cursor-pointer group border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <img
        src={item.url}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 flex flex-col justify-between p-4">
        <div className="self-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white/95 text-gray-800 text-[10px] font-bold px-2.5 py-1 rounded shadow-sm">
            Fotos
          </span>
        </div>

        {/* View hover icon in center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 bg-white/95 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Eye className="h-5 w-5 text-green-600" />
          </div>
        </div>

        <div className="mt-auto pointer-events-none">
          <h3 className="text-white font-bold text-base line-clamp-1">{item.title}</h3>
          {item.description && (
            <p className="text-gray-300 text-xs mt-1 line-clamp-2 font-light">{item.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Lightbox({ items, activeIndex, onClose, onPrev, onNext }) {
  const currentItem = items[activeIndex];
  if (!currentItem) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-6 select-none"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="flex justify-between items-center w-full z-10 text-white">
        <div className="text-sm font-semibold tracking-wider bg-black/40 px-3 py-1 rounded-full">
          {activeIndex + 1} / {items.length}
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-green-400 p-2 hover:bg-white/10 rounded-full transition-all duration-200 cursor-pointer"
        >
          <X className="h-7 w-7" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex items-center justify-between w-full flex-grow my-4 gap-2 relative">
        {/* Prev Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 md:left-4 z-10 bg-black/50 hover:bg-green-600 text-white hover:scale-110 p-3 rounded-full transition-all duration-200 cursor-pointer border border-white/10 shadow-lg"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
        </button>

        {/* Media Container */}
        <div 
          className="flex items-center justify-center flex-grow max-h-[70vh] w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {currentItem.type === 'video' ? (
            <video
              src={currentItem.url}
              controls
              autoPlay
              playsInline
              className="max-h-[70vh] max-w-[85vw] md:max-w-[70vw] rounded-lg shadow-2xl border border-white/10"
            />
          ) : (
            <img
              src={currentItem.url}
              alt={currentItem.title}
              className="max-h-[70vh] max-w-[85vw] md:max-w-[70vw] object-contain rounded-lg shadow-2xl border border-white/10"
            />
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 md:right-4 z-10 bg-black/50 hover:bg-green-600 text-white hover:scale-110 p-3 rounded-full transition-all duration-200 cursor-pointer border border-white/10 shadow-lg"
          aria-label="Siguiente"
        >
          <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
        </button>
      </div>

      {/* Caption / Description Bar */}
      <div 
        className="w-full text-center max-w-3xl mx-auto p-4 bg-black/50 backdrop-blur-sm rounded-2xl border border-white/5 mb-2 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-white text-base md:text-lg font-bold tracking-wide">
          {currentItem.title}
        </h2>
        {currentItem.description && (
          <p className="text-gray-300 text-xs md:text-sm mt-2 font-light leading-relaxed">
            {currentItem.description}
          </p>
        )}
      </div>
    </div>
  );
}

function Proyectos() {
  const [activeTab, setActiveTab] = React.useState('todos');
  const [lightboxIndex, setLightboxIndex] = React.useState(null);

  // Filter items based on active tab
  const filteredGallery = React.useMemo(() => {
    if (activeTab === 'todos') return projectsGallery;
    return projectsGallery.filter(item => item.category === activeTab);
  }, [activeTab]);

  const handlePrev = React.useCallback(() => {
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return prevIndex === 0 ? filteredGallery.length - 1 : prevIndex - 1;
    });
  }, [filteredGallery]);

  const handleNext = React.useCallback(() => {
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return prevIndex === filteredGallery.length - 1 ? 0 : prevIndex + 1;
    });
  }, [filteredGallery]);

  // Handle keyboard shortcuts
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  return (
    <div className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Trabajos Realizados en Sistemas PYL</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            La mejor garantía es una obra bien terminada. Explora nuestra galería interactiva de proyectos recientes en Málaga: techos continuos, insonorizaciones y diseños exclusivos en placa de yeso laminado (Pladur).
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {[
            { id: 'todos', name: 'Todos los trabajos' },
            { id: 'tv-oculta', name: 'Techo con TV Oculta' },
            { id: 'libreria', name: 'Librerías de Pladur' },
            { id: 'cajon-cocina', name: 'Cajón Cocina' },
            { id: 'otros', name: 'Otros Proyectos' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setLightboxIndex(null);
                setActiveTab(tab.id);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white shadow-md shadow-green-600/20'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-green-300 hover:text-green-600'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item, index) => {
            if (item.type === 'video') {
              return (
                <VideoGridItem 
                  key={item.id} 
                  item={item} 
                  onClick={() => setLightboxIndex(index)} 
                />
              );
            } else {
              return (
                <ImageGridItem 
                  key={item.id} 
                  item={item} 
                  onClick={() => setLightboxIndex(index)} 
                />
              );
            }
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredGallery}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}

function Contacto() {
  return (
    <div className="pt-28 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Pide tu presupuesto de Sistemas PYL sin compromiso</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Estás listo para dar forma a tu proyecto? Cuéntanos si necesitas renovar tus techos, aislar tu vivienda, levantar tabiques o crear muebles de diseño. Te asesoramos de forma personalizada y diseñamos un presupuesto a tu medida sin coste alguno.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Teléfono / WhatsApp */}
          <a 
            href="https://wa.me/34685554188" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
              <Phone className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Llámanos o WhatsApp</h3>
            <p className="text-gray-600 mb-4 flex-grow">Atención rápida y personalizada para presupuestos y consultas.</p>
            <span className="text-lg font-semibold text-green-600">+34 685 554 188</span>
          </a>

          {/* Email */}
          <a 
            href="mailto:info@aplaka2.es"
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
              <Mail className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Envíanos un Email</h3>
            <p className="text-gray-600 mb-4 flex-grow">Escríbenos con los detalles de tu proyecto y te responderemos pronto.</p>
            <span className="text-lg font-semibold text-blue-600">info@aplaka2.es</span>
          </a>

          {/* Ubicación */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
              <MapPin className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Nuestra Ubicación</h3>
            <p className="text-gray-600 mb-4 flex-grow">Ofrecemos nuestros servicios principalmente en la provincia de Málaga.</p>
            <span className="text-lg font-semibold text-red-600">Málaga, España</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center justify-center mb-6">
          <img src="/image/APLAKA2-NO-BG.png" alt="Aplaka2 Logo" className="h-16 w-auto opacity-90" />
          <p className="mt-3 text-sm text-gray-400 tracking-wider font-light">
            Construimos espacios, creamos confianza
          </p>
        </div>
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-500 space-y-2">
          <p>&copy; {new Date().getFullYear()} Aplaka2. Todos los derechos reservados.</p>
          <p className="text-[11px] text-gray-500 font-light max-w-xl mx-auto leading-relaxed">
            Nota: Algunas imágenes técnicas del catálogo han sido generadas mediante inteligencia artificial con fines puramente ilustrativos y explicativos de los sistemas de construcción.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  // Permite saltarse la pantalla de construcción con "?preview=true" en la URL o si ya se visitó
  const isPreview = typeof window !== 'undefined' && 
    (new URLSearchParams(window.location.search).get('preview') === 'true' || 
     localStorage.getItem('preview') === 'true');

  if (isPreview && typeof window !== 'undefined' && localStorage.getItem('preview') !== 'true') {
    localStorage.setItem('preview', 'true');
  }

  if (UNDER_CONSTRUCTION && !isPreview) {
    return <UnderConstruction />;
  }

  return (
    <Router>
      <div className="font-sans text-gray-800 min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/servicios/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}