const WhatIsVicky = () => {
  return (
    <section id="que-es-vicky" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Video Demo Section */}
        <div className="text-center mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
              <div className="bg-gray-800 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white text-sm">Conversación fluida con un agente virtual inteligente</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-xs">WeKall</span>
                    <div className="w-6 h-6 bg-[#461F9C] rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">V</span>
                    </div>
                  </div>
                </div>
                
                {/* Audio Waveform Visualization */}
                <div className="flex items-center justify-center space-x-1 py-8">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-[#4299e1] rounded-full animate-pulse"
                      style={{
                        width: '4px',
                        height: `${Math.random() * 40 + 10}px`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                  <div className="ml-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="text-center">
                  <span className="text-white text-sm">16 DE SEPTIEMBRE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How it Works Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d3748] mb-6">
            ¿Cómo funciona Vicky?
          </h2>
          <p className="text-xl text-[#718096] max-w-3xl mx-auto mb-12">
            Automatiza tus llamadas en 3 pasos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#4299e1] rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#2d3748] mb-4">
              Coordina una Demo Personalizada
            </h3>
            <p className="text-[#718096]">
              Agenda una cita con nuestro equipo y descubre cómo nuestro sistema puede optimizar las llamadas en tu negocio.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-[#4299e1] rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#2d3748] mb-4">
              Implementa el Sistema en tu Línea Telefónica
            </h3>
            <p className="text-[#718096]">
              Deja que nuestro equipo integre el sistema rápidamente en tu línea telefónica, sin complicaciones.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-[#4299e1] rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#2d3748] mb-4">
              Accede a Datos Recogidos en Cada Llamada
            </h3>
            <p className="text-[#718096]">
              Analiza fácilmente las llamadas realizadas para tomar decisiones informadas y mejorar la eficiencia de tu negocio.
            </p>
          </div>
        </div>

        {/* Benefits List */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#2d3748] mb-6">
                Vicky AI es la nueva forma de manejar llamadas eficientemente
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                <svg className="w-5 h-5 text-[#48bb78]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#2d3748]">Disponible 24/7</span>
              </div>
              
              <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                <svg className="w-5 h-5 text-[#48bb78]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#2d3748]">5 veces más barato que un call center</span>
              </div>
              
              <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                <svg className="w-5 h-5 text-[#48bb78]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#2d3748]">Manejamos servicio al cliente, ventas y generación de leads</span>
              </div>
              
              <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                <svg className="w-5 h-5 text-[#48bb78]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#2d3748]">Transferimos tus llamadas en caso de ser necesario</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsVicky