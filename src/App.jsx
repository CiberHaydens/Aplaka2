import React from 'react';
import { Phone, Mail, MapPin, CheckCircle, ChevronRight } from 'lucide-react';
import logo from '../4.png';

export default function App() {
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

  return (
    <div className="font-sans text-gray-800">
      {/* Navegación */}
      <nav className="fixed w-full bg-green-600/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
                <img src={logo} alt="Aplaka2 Logo" className="h-12 w-auto invert mix-blend-screen" />
              <span className="font-bold text-2xl tracking-tight text-white">Aplaka2</span>
            </div>
            <div className="hidden md:flex space-x-8">
                <a href="#inicio" className="text-green-50 hover:text-white font-medium transition-colors">Inicio</a>
                <a href="#servicios" className="text-green-50 hover:text-white font-medium transition-colors">Servicios</a>
                <a href="#nosotros" className="text-green-50 hover:text-white font-medium transition-colors">Nosotros</a>
                <a href="#galeria" className="text-green-50 hover:text-white font-medium transition-colors">Proyectos</a>
                <a href="#contacto" className="text-green-50 hover:text-white font-medium transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Reforma integral"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70 h-[600px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[600px] flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Especialistas en Reformas y Sistemas de Yeso Laminado
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Transformamos tus espacios con soluciones rápidas, limpias y de la máxima calidad. Aislamiento, tabiquería y techos a medida.
            </p>
            <a href="#contacto" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors">
              Solicitar Presupuesto
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Nuestros Servicios</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales adaptadas a las necesidades de su hogar o negocio, garantizando los mejores acabados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80"
                alt="Equipo trabajando"
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                Compromiso, Calidad y Experiencia
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                En Aplaka2 somos una empresa dedicada a las reformas integrales, especializados en la instalación de sistemas de placa de yeso laminado (comúnmente conocido como Pladur).
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Nuestra prioridad es la satisfacción del cliente. Trabajamos con limpieza, rapidez y atención al detalle, asegurando que cada proyecto cumpla con los más altos estándares técnicos y estéticos.
              </p>
              
              <ul className="space-y-4">
                {['Materiales de primera calidad', 'Equipo altamente cualificado', 'Cumplimiento de plazos', 'Asesoramiento personalizado'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Nuestros Proyectos</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Explora algunos de nuestros trabajos recientes. Esta galería se irá actualizando con nuestros nuevos proyectos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <img src={img} alt={`Proyecto ${index + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto & Footer */}
      <footer id="contacto" className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            <div>
              <div className="flex items-center gap-2 mb-6">
                <img src={logo} alt="Aplaka2 Logo" className="h-12 w-auto invert mix-blend-screen opacity-90" />
                <span className="font-bold text-2xl tracking-tight">Aplaka2</span>
              </div>
              <p className="text-gray-400">
                Especialistas en reformas integrales y sistemas de placa de yeso laminado. Transformamos tus ideas en realidad.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Contacto</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-green-500" />
                  <span>+34 600 000 000</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-green-500" />
                  <span>info@aplaka2.es</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-green-500" />
                  <span>Madrid, España</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Horario</h3>
              <p className="text-gray-400">Lunes a Viernes<br/>08:00 - 18:00</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Aplaka2 - Reformas Integrales. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}