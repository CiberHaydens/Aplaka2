import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function UnderConstruction() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col justify-between bg-gradient-to-b from-[#1b80c4] via-[#75c0e6] to-[#cf9751] p-4 sm:p-6 font-sans text-white selection:bg-green-500 selection:text-slate-950">
      
      {/* Header with Logo */}
      <header className="flex justify-center items-center h-16 shrink-0">
        <img 
          src="/image/APLAKA2-NO-BG.png" 
          alt="Aplaka2 Logo" 
          className="h-12 sm:h-14 w-auto filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]" 
        />
      </header>

      {/* Main Unified Board */}
      <main className="flex-grow flex items-center justify-center min-h-0 w-full my-2">
        <div className="bg-slate-950/75 border border-white/10 rounded-3xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md max-w-4xl w-full max-h-full flex flex-col justify-between overflow-hidden">
          
          {/* Main Image Container */}
          <div className="flex-grow flex items-center justify-center min-h-0 w-full">
            <img
              src="/image/under_construction.png"
              alt="En Construcción - Aplaka2"
              className="max-h-full max-w-full object-contain rounded-2xl shadow-lg select-none border border-slate-800/40"
            />
          </div>

          {/* Integrated Action / Contact Section */}
          <div className="mt-4 pt-4 border-t border-white/5 flex flex-col items-center gap-3 shrink-0">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 text-center">
              ¿Necesitas un presupuesto o consulta urgente?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/34685554188"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-extrabold rounded-xl text-slate-950 bg-green-500 hover:bg-green-400 active:scale-95 transition-all shadow-lg shadow-green-500/10"
              >
                <Phone className="h-4.5 w-4.5 fill-slate-950" />
                Contactar por WhatsApp
              </a>

              {/* Email Button */}
              <a
                href="mailto:aplakados@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold rounded-xl text-white bg-white/15 hover:bg-white/25 border border-white/10 active:scale-95 transition-all shadow-lg"
              >
                <Mail className="h-4.5 w-4.5" />
                Enviar un Email
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="h-10 flex justify-center items-center text-xs text-white/70 tracking-wide shrink-0">
        <p>&copy; {new Date().getFullYear()} Aplaka2. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
