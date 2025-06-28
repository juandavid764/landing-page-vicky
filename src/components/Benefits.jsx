const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#461F9C] mb-6">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-xl text-[#393939] max-w-3xl mx-auto mb-8">
            Las métricas que demuestran el impacto real de Vicky IA en tu negocio
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-[#2d3748]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#2d3748] mb-4">
              Seguridad en tus datos
            </h3>
            <p className="text-[#718096]">
              Protegemos tu información con avanzadas medidas de seguridad, garantizando tu tranquilidad.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-[#2d3748]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#2d3748] mb-4">
              Soporte 24/7
            </h3>
            <p className="text-[#718096]">
              Estamos disponibles en cualquier momento para resolver tus dudas y mantener todo funcionando sin problemas.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-[#2d3748]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#2d3748] mb-4">
              Asistencia personalizada
            </h3>
            <p className="text-[#718096]">
              Recibe ayuda especializada para configurar el sistema de manera efectiva y adaptada a tus necesidades.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#4299e1] mb-2">7X</div>
              <div className="text-[#718096]">Escala tu contacto con clientes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4299e1] mb-2">24/7</div>
              <div className="text-[#718096]">Disponibilidad completa</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4299e1] mb-2">80%</div>
              <div className="text-[#718096]">Reducción en costos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4299e1] mb-2">99%</div>
              <div className="text-[#718096]">Precisión en respuestas</div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-gradient-to-br from-[#461F9C] to-[#816CAF] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Tus empleados deberían pasar más tiempo en cosas importantes
          </h3>
          <p className="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Libera a tu equipo de tareas repetitivas y permíteles enfocarse en lo que realmente genera valor para tu negocio
          </p>
          <a 
            href="#demo" 
            className="inline-block bg-white text-[#461F9C] font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-lg"
          >
            Agenda una llamada
          </a>
        </div>
      </div>
    </section>
  )
}

export default Benefits