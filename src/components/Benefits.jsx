const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Integration Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d3748] mb-12">
            Integra con las herramientas de tu empresa
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#4299e1] mb-2">Zoho</div>
                <div className="text-sm text-gray-600">CRM</div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#4299e1] mb-2">Clientify</div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#4299e1] mb-2">HighLevel</div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#48bb78] mb-2">Shopify</div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2d3748] mb-2">Kommo</div>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Support Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d3748] mb-12">
            Seguridad & Soporte
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
      </div>
    </section>
  )
}

export default Benefits