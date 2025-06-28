const UseCases = () => {
  return (
    <section id="casos-uso" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Personalization Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d3748] mb-12">
            Personaliza el sistema a tu negocio
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[#2d3748]">María</span>
                    <span className="text-sm text-gray-500">Voz</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Conocimiento</h4>
                    <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-600">
                      Información específica sobre productos, servicios, políticas de la empresa, preguntas frecuentes y procedimientos internos.
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Comportamiento</h4>
                    <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-600">
                      Tono profesional y amigable, capacidad de escalamiento, manejo de objeciones y seguimiento de protocolos establecidos.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                <svg className="w-5 h-5 text-[#4299e1]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#2d3748]">Utiliza el acento que tú prefieras</span>
              </div>
              
              <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                <svg className="w-5 h-5 text-[#4299e1]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#2d3748]">Adapta el sistema con el conocimiento de tu negocio</span>
              </div>
              
              <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                <svg className="w-5 h-5 text-[#4299e1]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#2d3748]">Ajusta el comportamiento en diferentes escenarios</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d3748] mb-12">
            Todo lo que necesitas para un sistema telefónico automático
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
              <div className="flex space-x-1">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-[#4299e1] rounded-full"
                    style={{
                      width: '3px',
                      height: `${Math.random() * 20 + 10}px`
                    }}
                  />
                ))}
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#2d3748] mb-2">
              Llamadas que suenan como Conversaciones Humanas
            </h3>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-[#4299e1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#2d3748] mb-2">
              Garantizamos naturalidad en Español, Inglés y Portugués
            </h3>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-[#4299e1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#2d3748] mb-2">
              Haz llamadas y contesta llamadas automáticamente
            </h3>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-[#4299e1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#2d3748] mb-2">
              Toma acciones basadas en los resultados de las llamadas
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UseCases