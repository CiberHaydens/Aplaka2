import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  ArrowLeft, 
  CheckCircle,
  FileText, 
  Droplets, 
  Flame, 
  Shield, 
  Volume2,
  X,
  Eye,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { servicesData } from './servicesData';

// Map of icons for card items
const iconMap = {
  FileText,
  Droplets,
  Flame,
  Shield,
  Volume2
};

// Dynamic helper that maps drywall types, structural assemblies, and finishes to high-quality images
const getItemImage = (itemName) => {
  const normalized = itemName.toLowerCase();
  
  // Ceilings (keep local optimized ceiling photos)
  if (normalized.includes('techos directos')) {
    return '/image/servicios/techos-continuos/techos_continuos_portada.webp';
  }
  if (normalized.includes('simples') || normalized.includes('tc')) {
    return '/image/servicios/techos-continuos/techos_continuos_aislante.webp';
  }
  if (normalized.includes('dobles')) {
    return '/image/servicios/techos-continuos/techos_suspendidos_dobles.webp';
  }

  // All other generic fallbacks now map to our high-quality custom brand placeholder
  return '/image/servicios/working_on_it.webp';
};

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const service = servicesData.find(s => s.id === serviceId);

  // Scroll to top of the screen on mount to ensure clean view transitions
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  // Redirect if service doesn't exist
  useEffect(() => {
    if (!service) {
      navigate('/servicios');
    }
  }, [service, navigate]);

  // Memoize all real images inside this service for lightbox carousel navigation
  const allServiceImages = useMemo(() => {
    if (!service) return [];
    const imgs = [];
    if (service.image) {
      imgs.push({ url: service.image, title: service.title });
    }
    if (service.sections) {
      service.sections.forEach(section => {
        if (section.items) {
          section.items.forEach(item => {
            const itemImg = item.image || getItemImage(item.name || '');
            if (itemImg && !itemImg.includes('working_on_it.webp')) {
              if (!imgs.some(img => img.url === itemImg)) {
                imgs.push({ url: itemImg, title: item.name });
              }
            }
          });
        }
      });
    }
    return imgs;
  }, [service]);

  const handlePrevImg = useCallback(() => {
    setActiveLightboxIndex(prev => {
      if (prev === null) return null;
      return prev === 0 ? allServiceImages.length - 1 : prev - 1;
    });
  }, [allServiceImages]);

  const handleNextImg = useCallback(() => {
    setActiveLightboxIndex(prev => {
      if (prev === null) return null;
      return prev === allServiceImages.length - 1 ? 0 : prev + 1;
    });
  }, [allServiceImages]);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;
    if (diffX > swipeThreshold) {
      handleNextImg();
    } else if (diffX < -swipeThreshold) {
      handlePrevImg();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrevImg();
      } else if (e.key === 'ArrowRight') {
        handleNextImg();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, handlePrevImg, handleNextImg]);

  if (!service) return null;

  const renderItemIcon = (iconName, colorClass) => {
    const IconComponent = iconMap[iconName] || FileText;
    let textCol = 'text-slate-500'; // Default/Fallback to slate grey
    if (colorClass === 'blue') textCol = 'text-slate-500'; // Grey/Slate for Estándar (Blanco/Gris)
    if (colorClass === 'teal') textCol = 'text-teal-500';
    if (colorClass === 'rose') textCol = 'text-rose-500';
    if (colorClass === 'indigo') textCol = 'text-amber-500'; // Amber/Yellow for Alta Dureza
    if (colorClass === 'purple') textCol = 'text-purple-500';
    if (colorClass === 'green') textCol = 'text-green-500';

    return <IconComponent className={`h-5 w-5 ${textCol} shrink-0`} />;
  };

  const renderSectionContent = (section, index) => {
    const hasItems = section.items && section.items.length > 0;
    
    return (
      <div key={index} className="mb-16">
        {/* Section Heading */}
        <div className="border-b border-gray-250 pb-4 mb-8">
          <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
          {section.description && (
            <p className="text-sm text-gray-600 mt-2 leading-relaxed max-w-3xl">
              {section.description}
            </p>
          )}
        </div>

        {/* Section Content Grid */}
        {hasItems && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.items.map((item, i) => {
              const itemImg = item.image || getItemImage(item.name || '');
              const hasRealImage = itemImg && !itemImg.includes('working_on_it.webp');
              
              return (
                <div 
                  key={i} 
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-green-200 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Card Image Banner */}
                  {hasRealImage ? (
                    <div 
                      className="h-40 overflow-hidden relative shrink-0 bg-gray-100 cursor-zoom-in"
                      onClick={() => {
                        const idx = allServiceImages.findIndex(img => img.url === itemImg);
                        if (idx !== -1) setActiveLightboxIndex(idx);
                      }}
                    >
                      <img 
                        src={itemImg} 
                        alt={item.name} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    // Default header bar if no real image matches
                    <div className="h-3 bg-green-600/10 shrink-0"></div>
                  )}

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        {item.icon && renderItemIcon(item.icon, item.color)}
                        <h4 className="font-bold text-base text-gray-900">
                          {item.name || item.type}
                        </h4>
                      </div>
                      {item.badge && (
                        <span className="text-[10px] bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-200/50 uppercase tracking-wider font-semibold shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Standard text detail */}
                    {(item.desc || item.description) && (
                      <p className="text-xs text-gray-600 leading-relaxed font-normal flex-grow mb-4">
                        {item.desc || item.description}
                      </p>
                    )}

                    {/* Specialized details (like finishes levels or installation methods) */}
                    {(item.how || item.advantages || item.when || item.looks || item.use) && (
                      <div className="space-y-2 text-xs text-gray-600 border-t border-gray-100 pt-3 mt-auto leading-relaxed">
                        {item.how && (
                          <p>
                            <strong className="text-gray-900 font-semibold">¿Cómo?:</strong> {item.how}
                          </p>
                        )}
                        {item.looks && (
                          <p>
                            <strong className="text-gray-900 font-semibold">Aspecto:</strong> {item.looks}
                          </p>
                        )}
                        {item.advantages && (
                          <p>
                            <strong className="text-gray-900 font-semibold">Ventajas:</strong> {item.advantages}
                          </p>
                        )}
                        {item.when && (
                          <p>
                            <strong className="text-gray-900 font-semibold">Cuándo:</strong> {item.when}
                          </p>
                        )}
                        {item.use && (
                          <p>
                            <strong className="text-gray-900 font-semibold">Uso:</strong> {item.use}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const encodedMessage = encodeURIComponent(`Hola Aplaka2, me gustaría obtener más información y un presupuesto para el servicio de ${service.title}.`);

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Banner Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32 overflow-hidden shrink-0">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white pointer-events-none">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-none mb-6">
            {service.title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-250 max-w-3xl font-light leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      {/* Main Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Breadcrumbs Row (Mobile-first Tap targets) */}
        <div className="mb-10">
          <nav className="flex flex-wrap items-center text-xs sm:text-sm font-medium text-gray-400 gap-2 py-2 border-b border-gray-100">
            <Link to="/" className="hover:text-green-600 transition-colors py-1.5 px-1 min-h-[44px] flex items-center">Inicio</Link>
            <span>/</span>
            <Link to="/servicios" className="hover:text-green-650 transition-colors py-1.5 px-1 min-h-[44px] flex items-center">Servicios</Link>
            <span>/</span>
            <span className="text-green-600 font-semibold py-1.5 px-1 flex items-center min-h-[44px]">{service.title}</span>
          </nav>
        </div>

        {/* Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 bg-gray-50 p-6 md:p-10 rounded-3xl border border-gray-100">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-widest text-green-600 uppercase mb-2 block">
              Descripción General
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide">
              ¿En qué consiste el servicio?
            </h2>
            <p className="text-sm sm:text-base text-gray-650 leading-relaxed font-light mb-4">
              {service.intro || service.description}
            </p>
          </div>
          <div 
            className="lg:col-span-5 h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md cursor-zoom-in bg-gray-100 group"
            onClick={() => {
              const idx = allServiceImages.findIndex(img => img.url === service.image);
              if (idx !== -1) setActiveLightboxIndex(idx);
            }}
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>

        {/* Dynamic Spec Sections */}
        {service.sections && service.sections.map((section, idx) => renderSectionContent(section, idx))}

        {/* Call To Action Block */}
        <div className="bg-green-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 mt-20 shadow-lg">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 uppercase">¿Listo para renovar tu espacio?</h3>
            <p className="text-green-50 text-sm md:text-base font-light max-w-xl">
              Solicita hoy mismo tu presupuesto sin compromiso para el montaje de {service.title} en Málaga. Te ofrecemos el mejor asesoramiento profesional.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
            <a
              href={`https://wa.me/34685554188?text=${encodedMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-transparent rounded-xl text-sm font-audiowide font-bold text-green-700 bg-white hover:bg-gray-50 shadow-md transition-all duration-300 shrink-0"
            >
              <Phone className="mr-2 h-4 w-4 fill-current text-green-700" />
              WhatsApp Directo
            </a>
            <a
              href={`mailto:info@aplaka2.es?subject=Presupuesto%20de%20${encodeURIComponent(service.title)}&body=Hola%20Aplaka2,%20me%2520gustaría%2520solicitar%2520un%2520presupuesto%2520para...`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-white/20 hover:border-white/30 rounded-xl text-sm font-audiowide font-bold text-white bg-green-700 hover:bg-green-800 transition-all duration-300 shrink-0"
            >
              <Mail className="mr-2 h-4 w-4 text-white" />
              Enviar Email
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && allServiceImages[activeLightboxIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300 touch-none"
          onClick={() => setActiveLightboxIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors backdrop-blur-md cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={(e) => { e.stopPropagation(); setActiveLightboxIndex(null); }}
          >
            <X className="h-6 w-6" />
          </button>

          {/* Left Arrow Button (Desktop Only) */}
          {allServiceImages.length > 1 && (
            <button
              className="absolute left-4 z-50 hidden md:flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full p-3.5 transition-colors backdrop-blur-md cursor-pointer select-none"
              onClick={(e) => { e.stopPropagation(); handlePrevImg(); }}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Right Arrow Button (Desktop Only) */}
          {allServiceImages.length > 1 && (
            <button
              className="absolute right-4 z-50 hidden md:flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full p-3.5 transition-colors backdrop-blur-md cursor-pointer select-none"
              onClick={(e) => { e.stopPropagation(); handleNextImg(); }}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Image & Title Wrap */}
          <div 
            className="flex flex-col items-center max-w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={allServiceImages[activeLightboxIndex].url} 
              alt={allServiceImages[activeLightboxIndex].title || "Visualización ampliada"} 
              className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-250 pointer-events-none select-none" 
            />
            {allServiceImages[activeLightboxIndex].title && (
              <p className="text-white text-sm md:text-base font-semibold mt-4 text-center px-4 drop-shadow-md">
                {allServiceImages[activeLightboxIndex].title}
              </p>
            )}
            
            {/* Step Counter/Indicators */}
            {allServiceImages.length > 1 && (
              <span className="text-xs text-gray-400 mt-2 bg-black/40 px-3 py-1 rounded-full font-medium tracking-wide">
                {activeLightboxIndex + 1} / {allServiceImages.length}
              </span>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
