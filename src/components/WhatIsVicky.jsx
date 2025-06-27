const WhatIsVicky = () => {
  return (
    <section id="que-es-vicky" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#461F9C] mb-6">
            ¿Qué es Vicky y cómo funciona?
          </h2>
          <p className="text-xl text-[#393939] max-w-3xl mx-auto">
            Vicky es un asistente conversacional inteligente diseñado para automatizar y 
            optimizar las interacciones con tus clientes las 24 horas del día.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#55D39E] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#461F9C] mb-2">
                  Inteligencia Artificial Avanzada
                </h3>
                <p className="text-[#393939]">
                  Utiliza procesamiento de lenguaje natural para entender y responder 
                  de manera contextual a las consultas de tus clientes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#55D39E] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#461F9C] mb-2">
                  Integración Seamless
                </h3>
                <p className="text-[#393939]">
                  Se integra fácilmente con tus sistemas existentes, plataformas de chat, 
                  CRM y herramientas de gestión empresarial.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#55D39E] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#461F9C] mb-2">
                  Respuestas Instantáneas
                </h3>
                <p className="text-[#393939]">
                  Proporciona respuestas inmediatas y precisas, mejorando significativamente 
                  la experiencia del cliente y reduciendo tiempos de espera.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#55D39E] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#461F9C] mb-2">
                  Análisis y Métricas
                </h3>
                <p className="text-[#393939]">
                  Genera reportes detallados sobre interacciones, satisfacción del cliente 
                  y puntos de mejora para optimizar continuamente el servicio.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#E1DEE9] rounded-2xl p-8 border-2 border-[#9882CC]">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#461F9C] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">V</span>
                  </div>
                  <h4 className="text-xl font-semibold text-[#461F9C] mb-2">
                    Vicky en Acción
                  </h4>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-[#55D39E] rounded-full animate-pulse"></div>
                      <span className="text-sm text-[#393939]">Procesando consulta...</span>
                    </div>
                    <p className="text-[#393939] text-sm">
                      "¿Cuáles son sus horarios de atención?"
                    </p>
                  </div>
                  
                  <div className="bg-[#461F9C] text-white rounded-lg p-4">
                    <p className="text-sm">
                      Nuestros horarios de atención son de lunes a viernes de 8:00 AM a 6:00 PM. 
                      Sin embargo, yo estoy disponible 24/7 para ayudarte con tus consultas.
                    </p>
                  </div>
                  
                  <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-[#55D39E] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#816CAF] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#9882CC] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsVicky
