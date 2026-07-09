import React, { useEffect } from 'react';
import { X, Phone } from 'lucide-react';

export default function ServiceModal({ service, onClose }) {
  useEffect(() => {
    // Lock scrolling on mount
    document.body.style.overflow = 'hidden';
    return () => {
      // Restore scrolling on unmount
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!service) return null;

  const renderSectionHeader = (title, description) => (
    <div className="border-b border-gray-200 pb-2 mt-6 mb-3">
      <h4 className="text-lg font-bold text-gray-900">{title}</h4>
      {description && <p className="text-xs text-gray-500 mt-1 leading-relaxed">{description}</p>}
    </div>
  );

  const renderSectionContent = (section, index) => {
    switch (section.type) {
      case 'plaques':
      case 'plaques_simple':
      case 'materials':
      case 'structures_detail':
      case 'structures':
      case 'insulators':
      case 'foseados_list':
      case 'insulators_simple':
      case 'furniture_types':
        return (
          <div key={index} className="space-y-3">
            {renderSectionHeader(section.title, section.description)}
            <ul className="space-y-2.5">
              {section.items.map((item, i) => (
                <li key={i} className="text-sm text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">{item.name || item.type}:</strong>{' '}
                  <span>{item.desc || item.description}</span>
                  {item.badge && (
                    <span className="text-[10px] ml-2 text-gray-500 italic">
                      ({item.badge})
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );

      case 'installation_methods':
        return (
          <div key={index} className="space-y-4">
            {renderSectionHeader(section.title, section.description)}
            <div className="space-y-4">
              {section.items.map((item, i) => (
                <div key={i} className="text-sm border-l-2 border-gray-200 pl-4 space-y-1">
                  <h5 className="font-bold text-gray-900 text-base">{item.name}</h5>
                  <p className="text-gray-700">
                    <strong className="text-gray-900">¿Cómo se monta?:</strong> {item.how}
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-gray-900">Ventajas:</strong> {item.advantages}
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-gray-900">Cuándo usarlo:</strong> {item.when}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'finishes_levels':
        return (
          <div key={index} className="space-y-4">
            {renderSectionHeader(section.title, section.description)}
            <div className="space-y-4">
              {section.items.map((item, i) => (
                <div key={i} className="text-sm border-l-2 border-gray-200 pl-4 space-y-1">
                  <h5 className="font-bold text-gray-900 text-base">{item.name}</h5>
                  <p className="text-gray-700">
                    <strong className="text-gray-900">¿En qué consiste?:</strong> {item.how}
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-gray-900">Aspecto:</strong> {item.looks}
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-gray-900">Uso recomendado:</strong> {item.use}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const encodedMessage = encodeURIComponent(`Hola Aplaka2, me gustaría obtener más información y un presupuesto para el servicio de ${service.title}.`);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-gray-950/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      ></div>

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] sm:max-h-[85vh] flex flex-col overflow-hidden transform transition-all animate-in fade-in-50 zoom-in-95 duration-300 z-10">
        
        {/* Banner with image and title */}
        <div className="h-44 sm:h-56 w-full relative shrink-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="bg-gradient-to-t from-gray-950/90 via-gray-950/45 to-transparent absolute inset-0"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white rounded-full p-2.5 transition-colors backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Cerrar modal"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-4 flex-grow">
          {/* Main Intro */}
          <div className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {service.intro || service.description}
          </div>

          {/* Dynamic Sections */}
          {service.sections && service.sections.map((section, idx) => renderSectionContent(section, idx))}
        </div>

        {/* Modal Footer with Actions */}
        <div className="border-t border-gray-150 px-6 py-4 bg-gray-50 flex flex-col sm:flex-row gap-3 sm:justify-end shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 border border-gray-300 rounded-xl text-sm font-audiowide font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
          >
            Cerrar
          </button>
          <a
            href={`https://wa.me/34685554188?text=${encodedMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 border border-transparent rounded-xl text-sm font-audiowide font-semibold text-white bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
          >
            <Phone className="mr-2 h-4 w-4 fill-current text-white" />
            Solicitar Presupuesto
          </a>
        </div>
      </div>
    </div>
  );
}
