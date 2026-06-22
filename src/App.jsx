import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useSearchParams } from 'react-router-dom';
import { Phone, Mail, MapPin, CheckCircle, ChevronRight } from 'lucide-react';
import Header from './Header';
import { servicesData } from './servicesData';
import ServiceModal from './ServiceModal';


const gallery = [
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
  'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Especialistas en Sistemas PYL en Málaga (instaladores de “Pladur”)
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Transformamos tus espacios con solutions de construcción en seco rápidas, limpias y de máxima calidad. Desde tabiques, trasdosados y techos hasta soluciones avanzadas de aislamiento térmico e insonorización a medida para tu hogar o negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/34685554188"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Contactar por WhatsApp
            </a>
            <a href="mailto:aplakados@gmail.com" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl">
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
  const [searchParams, setSearchParams] = useSearchParams();
  const serviceId = searchParams.get('s');
  const selectedService = servicesData.find(s => s.id === serviceId);

  const openService = (id) => {
    setSearchParams({ s: id });
  };

  const closeService = () => {
    setSearchParams({});
  };

  return (
    <div className="pt-28 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mt-2">Soluciones a medida en Sistemas PYL (“Pladur”)</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Creamos proyectos integrales adaptamos al mílimetro tus necesidades. Somos expertos en la instalación de Sistemas de Placa de Yeso Laminado (comúnmente conocido como “Pladur”). Garantizamos acabados impecables de alta decoración.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              onClick={() => openService(service.id)}
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
            </div>
          ))}
        </div>
      </div>

      {/* Render the detail pop-up modal if a service is selected */}
      {selectedService && (
        <ServiceModal service={selectedService} onClose={closeService} />
      )}
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
                En Aplaka2, nuestra misión es ayudarle a crear espacios mejor aprovechados y confortables. Como instaladores especialistas en reformas de viviendas, comercios y oficinas, dominamos desde la tabiquería estructural hasta detalles de diseño como foseados, candilejas y mobiliario a medida, combinando estética con un aislamiento termoacústico insuperable.
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

function Proyectos() {
  return (
    <div className="pt-28 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Trabajos realizados en Sistemas PYL</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            La mejor garantía es una obra bien terminada. Explora nuestros proyectos recientes en Sistemas PYL (“Pladur”). Inspiración real, estructuras sólidas y acabados profesionales en toda Málaga.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gallery.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-200 cursor-pointer">
              <img src={img} alt={`Proyecto ${index + 1}`} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
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
            href="mailto:aplakados@gmail.com"
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
              <Mail className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Envíanos un Email</h3>
            <p className="text-gray-600 mb-4 flex-grow">Escríbenos con los detalles de tu proyecto y te responderemos pronto.</p>
            <span className="text-lg font-semibold text-blue-600">aplakados@gmail.com</span>
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
        <div className="flex justify-center items-center mb-6">
          <img src="/image/APLAKA2-NO-BG.png" alt="Aplaka2 Logo" className="h-16 w-auto opacity-90" />
        </div>
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Aplaka2. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800 min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
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