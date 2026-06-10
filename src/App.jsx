import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Phone, Mail, MapPin, CheckCircle, ChevronRight } from 'lucide-react';
import Header from './Header';
import logo from '/image/D9351D23-6697-4DD2-AB7E-8477491E4BB2.png';

const services = [
  {
    title: 'Placa de Yeso Laminado',
    description: 'Instalación profesional de sistemas de placa de yeso laminado para tabiquería y decoración.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80'
  },
  {
    title: 'Tabiques',
    description: 'Separación de espacios y distribución de interiores con los mejores materiales de aislamiento.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80'
  },
  {
    title: 'Trasdosados',
    description: 'Revestimiento de muros interiores para mejorar el aislamiento térmico y acústico de su vivienda.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80'
  },
  {
    title: 'Techos Continuos',
    description: 'Creación de falsos techos lisos y uniformes, ideales para ocultar instalaciones y mejorar la estética.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80'
  },
  {
    title: 'Techos Registrables',
    description: 'Soluciones modulares perfectas para oficinas y locales comerciales que requieren acceso al techo.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&q=80'
  },
  {
    title: 'Insonorización',
    description: 'Sistemas avanzados de aislamiento acústico para garantizar la tranquilidad en cualquier espacio.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=80'
  }
];

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
    <div className="relative pt-16 flex flex-col">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Reforma integral"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-center w-full min-h-[calc(100vh-64px)]">
        <div className="max-w-2xl py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Especialistas en Sistemas de Placa de Yeso Laminado
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Transformamos tus espacios con soluciones rápidas, limpias y de la máxima calidad. Aislamiento, tabiquería y techos a medida.
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
  );
}

function Servicios() {
  return (
    <div className="pt-28 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Nuestros Servicios</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales adaptadas a las necesidades de su hogar o negocio, garantizando los mejores acabados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
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
              Compromiso, Calidad y Experiencia
            </h2>
            <div className="text-lg text-gray-600">
              <p className="mb-6 font-semibold text-gray-800">
                En Aplaka2, nuestra misión es ayudarte a crear espacios mejor aprovechados, más cómodos y con acabados de la más alta calidad.
              </p>
              <p className="mb-8">
                Nos especializamos en la instalación de sistemas de placa de yeso laminado (Pladur) para viviendas, locales y oficinas, ofreciendo soluciones innovadoras que combinan funcionalidad, aislamiento superior y un diseño moderno.
              </p>
            </div>
            
            <ul className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
              {['Materiales de primera calidad', 'Equipo altamente cualificado', 'Cumplimiento de plazos', 'Asesoramiento personalizado'].map((item, i) => (
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
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Nuestros Proyectos</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Explora algunos de nuestros trabajos recientes. Esta galería se irá actualizando con nuestros nuevos proyectos.
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Contacta con nosotros</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a transformar tus ideas en realidad. Ponte en contacto hoy mismo.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
          {/* Información de contacto */}
          <div className="bg-gradient-to-br from-green-800 to-green-600 p-10 text-white flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl font-bold mb-8">Información</h3>
            
            <ul className="space-y-8 max-w-md w-full">
              <li className="flex flex-col items-center group">
                <div className="bg-green-700/50 p-4 rounded-full group-hover:bg-white group-hover:text-green-700 transition-colors duration-300 mb-3">
                  <Phone className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm font-medium text-green-200">Teléfono</p>
                  <p className="text-xl font-semibold">+34 685 554 188</p>
                </div>
              </li>
              <li className="flex flex-col items-center group">
                <div className="bg-green-700/50 p-4 rounded-full group-hover:bg-white group-hover:text-green-700 transition-colors duration-300 mb-3">
                  <Mail className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm font-medium text-green-200">Email</p>
                  <p className="text-xl font-semibold">aplakados@gmail.com</p>
                </div>
              </li>
              <li className="flex flex-col items-center group">
                <div className="bg-green-700/50 p-4 rounded-full group-hover:bg-white group-hover:text-green-700 transition-colors duration-300 mb-3">
                  <MapPin className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm font-medium text-green-200">Ubicación</p>
                  <p className="text-xl font-semibold">Málaga, España</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-12 flex space-x-6">
              {/* Espacio para redes sociales si en el futuro se desean agregar */}
              <div className="w-12 h-12 rounded-full bg-green-700/50 flex items-center justify-center hover:bg-white hover:text-green-700 transition-colors cursor-pointer">
                <span className="font-bold">in</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-700/50 flex items-center justify-center hover:bg-white hover:text-green-700 transition-colors cursor-pointer">
                <span className="font-bold">fb</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-700/50 flex items-center justify-center hover:bg-white hover:text-green-700 transition-colors cursor-pointer">
                <span className="font-bold">ig</span>
              </div>
            </div>
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
        <div className="flex justify-center items-center gap-2 mb-6">
          <img src={logo} alt="Aplaka2 Logo" className="h-10 w-auto invert brightness-0 opacity-90" />
          <span className="font-bold text-xl tracking-tight">Aplaka2</span>
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